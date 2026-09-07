import { CartItem } from "./Cart";

export const BUSINESS_WHATSAPP_NUMBER = "3931062765";

const parsePrice = (price: string): number =>
  Number(price.replace(/[^0-9.]/g, "")) || 0;

const preparationLabel = (prep: CartItem["preparation"]): string =>
  prep === "empanizado" ? "Empanizado" : "Normal";

export const buildOrderMessage = (
  items: CartItem[],
  orderNumber: string,
): string => {
  const lines = items.map((item) => {
    const lineTotal = parsePrice(item.price) * item.quantity;
    return `• ${item.quantity}x ${item.name} (${preparationLabel(
      item.preparation,
    )}) - $${lineTotal.toFixed(2)}`;
  });

  const subtotal = items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0,
  );

  return [
    `*Nuevo pedido — Décimo Rollo*`,
    `Pedido No. ${orderNumber}`,
    ``,
    ...lines,
    ``,
    `*Total: $${subtotal.toFixed(2)}*`,
    ``,
  ].join("\n");
};

export const openWhatsAppWithOrder = (
  items: CartItem[],
  orderNumber: string,
  phoneNumber: string = BUSINESS_WHATSAPP_NUMBER,
): void => {
  const message = buildOrderMessage(items, orderNumber);
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;
  window.open(url, "_blank", "noopener,noreferrer");
};
