import { CartItem } from "./Cart";

export const BUSINESS_WHATSAPP_NUMBER = "3931062765";

const preparationLabel = (prep: CartItem["preparation"]): string =>
  prep === "empanizado" ? "Empanizado" : "Normal";

export const buildOrderMessage = (
  items: CartItem[],
  orderNumber: string,
): string => {
  const lines = items.map((item) => {
    return `• ${item.quantity}x ${item.name} (${preparationLabel(
      item.preparation,
    )}) `;
  });

  return [
    `*Nuevo pedido — Décimo Rollo*`,
    `Pedido No. ${orderNumber}`,
    ``,
    ...lines,
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
