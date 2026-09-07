
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { CartItem } from "./Cart";
import { imageToBase64 } from "../../utils/imageToBase64";

const logoUrl = "/images/logo.jpeg";

const COLORS = {
  dark: [44, 24, 16] as [number, number, number],
  gold: [196, 154, 108] as [number, number, number],
  cream: [253, 249, 246] as [number, number, number],
  white: [255, 255, 255] as [number, number, number],
  muted: [120, 100, 85] as [number, number, number],
};

export interface OrderMetadata {
  orderNumber?: string;
  customerName?: string;
  reference?: string;
  notes?: string;
}

const parsePrice = (price: string): number =>
  Number(price.replace(/[^0-9.]/g, "")) || 0;

const formatPrice = (value: number): string =>
  `$${value.toFixed(2)}`;

const preparationLabel = (
  prep: CartItem["preparation"]
): string =>
  prep === "empanizado" ? "Empanizado" : "Normal";

const buildOrderNumber = (): string => {
  const now = new Date();

  return `${now.getFullYear().toString().slice(-2)}${String(
    now.getMonth() + 1
  ).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}-${String(
    now.getHours()
  ).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}`;
};

const createCircularLogo = (
  imageBase64: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const size = 500;
      const canvas = document.createElement("canvas");

      canvas.width = size;
      canvas.height = size;

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("No se pudo crear el contexto del canvas"));
        return;
      }

      ctx.clearRect(0, 0, size, size);

      ctx.beginPath();
      ctx.arc(
        size / 2,
        size / 2,
        size / 2,
        0,
        Math.PI * 2
      );
      ctx.closePath();
      ctx.clip();

      const imageRatio = img.width / img.height;

      let drawWidth = size;
      let drawHeight = size;
      let offsetX = 0;
      let offsetY = 0;

      if (imageRatio > 1) {
        drawHeight = size;
        drawWidth = size * imageRatio;
        offsetX = (size - drawWidth) / 2;
      } else {
        drawWidth = size;
        drawHeight = size / imageRatio;
        offsetY = (size - drawHeight) / 2;
      }

      ctx.drawImage(
        img,
        offsetX,
        offsetY,
        drawWidth,
        drawHeight
      );

      resolve(canvas.toDataURL("image/png"));
    };

    img.onerror = () => {
      reject(new Error("No se pudo cargar el logo"));
    };

    img.src = imageBase64;
  });
};

export const generateOrderPDF = async (
  items: CartItem[],
  meta: OrderMetadata = {}
): Promise<jsPDF> => {
  const doc = new jsPDF({
    unit: "pt",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();

  const orderNumber =
    meta.orderNumber ?? buildOrderNumber();

  const dateStr = new Date().toLocaleString("es-MX", {
    dateStyle: "long",
    timeStyle: "short",
  });

  const headerHeight = 120;

  doc.setFillColor(...COLORS.dark);
  doc.rect(0, 0, pageWidth, headerHeight, "F");

  try {
    const logoBase64 = await imageToBase64(logoUrl);

    const circularLogo =
      await createCircularLogo(logoBase64);

    const logoSize = 64;
    const logoX = 40;
    const logoY =
      headerHeight / 2 - logoSize / 2;

    doc.setFillColor(...COLORS.gold);

    doc.circle(
      logoX + logoSize / 2,
      logoY + logoSize / 2,
      logoSize / 2 + 3,
      "F"
    );

    doc.addImage(
      circularLogo,
      "PNG",
      logoX,
      logoY,
      logoSize,
      logoSize,
      undefined,
      "FAST"
    );
  } catch (err) {
    console.warn(
      "No se pudo cargar el logo en el PDF:",
      err
    );
  }

  doc.setTextColor(...COLORS.white);
  doc.setFont("times", "bold");
  doc.setFontSize(24);

  doc.text(
    "DÉCIMO ROLLO",
    120,
    headerHeight / 2 - 6
  );

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.gold);

  doc.text(
    "SUSHI · PEDIDO",
    120,
    headerHeight / 2 + 14,
    {
      charSpace: 1.2,
    }
  );

  let cursorY = headerHeight + 36;

  doc.setTextColor(...COLORS.dark);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);

  doc.text(
    `Pedido No. ${orderNumber}`,
    40,
    cursorY
  );

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(...COLORS.muted);

  doc.text(
    dateStr,
    pageWidth - 40,
    cursorY,
    {
      align: "right",
    }
  );

  cursorY += 16;

  if (meta.customerName) {
    doc.setTextColor(...COLORS.dark);

    doc.text(
      `Cliente: ${meta.customerName}`,
      40,
      cursorY
    );

    cursorY += 14;
  }

  if (meta.reference) {
    doc.setTextColor(...COLORS.dark);

    doc.text(
      `Referencia: ${meta.reference}`,
      40,
      cursorY
    );

    cursorY += 14;
  }

  cursorY += 8;

  const rows = items.map((item) => {
    const unit = parsePrice(item.price);
    const lineTotal = unit * item.quantity;

    return [
      item.name,
      preparationLabel(item.preparation),
      String(item.quantity),
      formatPrice(unit),
      formatPrice(lineTotal),
    ];
  });

  autoTable(doc, {
    startY: cursorY,
    head: [
      [
        "Platillo",
        "Preparación",
        "Cant.",
        "P. Unit.",
        "Subtotal",
      ],
    ],
    body: rows,
    margin: {
      left: 40,
      right: 40,
    },
    styles: {
      font: "helvetica",
      fontSize: 10,
      cellPadding: 8,
      textColor: COLORS.dark,
      lineColor: [230, 220, 210],
      lineWidth: 0.5,
    },
    headStyles: {
      fillColor: COLORS.dark,
      textColor: COLORS.white,
      fontStyle: "bold",
      fontSize: 9.5,
    },
    alternateRowStyles: {
      fillColor: [250, 246, 242],
    },
    columnStyles: {
      2: {
        halign: "center",
      },
      3: {
        halign: "right",
      },
      4: {
        halign: "right",
        fontStyle: "bold",
      },
    },
  });

  const finalY =
    (doc as any).lastAutoTable.finalY + 20;

  const subtotal = items.reduce(
    (sum, item) =>
      sum +
      parsePrice(item.price) * item.quantity,
    0
  );

  const totalsBoxWidth = 220;

  const totalsBoxX =
    pageWidth - 40 - totalsBoxWidth;

  doc.setDrawColor(...COLORS.gold);
  doc.setLineWidth(0.75);

  doc.line(
    totalsBoxX,
    finalY - 8,
    pageWidth - 40,
    finalY - 8
  );

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...COLORS.muted);

  doc.text(
    "Total",
    totalsBoxX,
    finalY + 14
  );

  doc.setFont("times", "bold");
  doc.setFontSize(20);
  doc.setTextColor(...COLORS.dark);

  doc.text(
    formatPrice(subtotal),
    pageWidth - 40,
    finalY + 16,
    {
      align: "right",
    }
  );

  let notesY = finalY + 50;

  if (meta.notes) {
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9.5);
    doc.setTextColor(...COLORS.muted);

    const wrapped = doc.splitTextToSize(
      `Notas: ${meta.notes}`,
      pageWidth - 80
    );

    doc.text(
      wrapped,
      40,
      notesY
    );

    notesY +=
      wrapped.length * 12 + 10;
  }

  const pageHeight =
    doc.internal.pageSize.getHeight();

  const footerY = pageHeight - 50;

  doc.setDrawColor(...COLORS.gold);
  doc.setLineWidth(0.5);

  doc.line(
    40,
    footerY - 14,
    pageWidth - 40,
    footerY - 14
  );

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.muted);

  doc.text(
    "Gracias por tu pedido en Décimo Rollo",
    40,
    footerY
  );

  doc.text(
    "Este documento es tu pedido.",
    40,
    footerY + 12
  );

  return doc;
};

export const downloadOrderPDF = async (
  items: CartItem[],
  meta: OrderMetadata = {}
): Promise<{
  fileName: string;
  orderNumber: string;
}> => {
  const orderNumber =
    meta.orderNumber ?? buildOrderNumber();

  const doc = await generateOrderPDF(
    items,
    {
      ...meta,
      orderNumber,
    }
  );

  const fileName =
    `Pedido-DecimoRollo-${orderNumber}.pdf`;

  doc.save(fileName);

  return {
    fileName,
    orderNumber,
  };
};

