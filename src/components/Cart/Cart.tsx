import React, { useMemo, useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Backdrop,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { openWhatsAppWithOrder } from "./whatsapp";

export type Preparation = "normal" | "empanizado";

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  preparation: Preparation;
}

interface CartPanelProps {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onQuantityChange: (id: number, quantity: number) => void;
  onPreparationChange: (id: number, preparation: Preparation) => void;
  onRemove: (id: number) => void;
  onCheckout?: () => void;
}

const parsePrice = (price: string): number =>
  Number(price.replace(/[^0-9.]/g, "")) || 0;

const formatPrice = (value: number): string => `$${value.toFixed(0)}`;

export const CartPanel: React.FC<CartPanelProps> = ({
  open,
  items,
  onClose,
  onQuantityChange,
  onPreparationChange,
  onRemove,
  onCheckout,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + parsePrice(item.price) * item.quantity,
        0,
      ),
    [items],
  );

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const handleConfirmOrder = async () => {
    if (items.length === 0 || isProcessing) return;
    setShowConfirmation(true);
  };

  const handleSendToWhatsApp = () => {
    setIsProcessing(true);
    try {
      const orderNumber = Date.now().toString().slice(-6);
      openWhatsAppWithOrder(items, orderNumber);
      setShowConfirmation(false);
      onCheckout?.();
      onClose();
    } catch (err) {
      console.error("No se pudo enviar el pedido:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <Backdrop
            open={open}
            onClick={onClose}
            sx={{
              zIndex: 1300,
              backgroundColor: "rgba(44, 24, 16, 0.35)",
            }}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(420px, 100vw)",
              zIndex: 1301,
              backgroundColor: "#FDF9F6",
              boxShadow: "-12px 0 40px rgba(44, 24, 16, 0.12)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                px: 3,
                pt: 3,
                pb: 2,
                borderBottom: "1px solid rgba(196,154,108,0.12)",
              }}
            >
              <Stack
                direction="row"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Box>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#C49A6C",
                      letterSpacing: "0.3em",
                      fontSize: "0.65rem",
                      fontWeight: 300,
                      fontFamily: '"Cormorant Garamond", serif',
                    }}
                  >
                    {itemCount} {itemCount === 1 ? "platillo" : "platillos"}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                      color: "#2C1810",
                      fontSize: "1.6rem",
                      mt: 0.25,
                    }}
                  >
                    Tu Pedido
                  </Typography>
                </Box>

                <IconButton
                  onClick={onClose}
                  size="small"
                  sx={{
                    color: "#2C1810",
                    backgroundColor: "rgba(196,154,108,0.08)",
                    "&:hover": { backgroundColor: "rgba(196,154,108,0.16)" },
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Box>

            <Box sx={{ flex: 1, overflowY: "auto", px: 3, py: 2 }}>
              {items.length === 0 ? (
                <Box sx={{ textAlign: "center", py: 8 }}>
                  <ShoppingBagOutlinedIcon
                    sx={{ fontSize: 32, color: "rgba(196,154,108,0.4)", mb: 1 }}
                  />
                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      color: "rgba(44,24,16,0.5)",
                      fontSize: "1.05rem",
                    }}
                  >
                    Tu carrito está vacío
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      color: "rgba(44,24,16,0.3)",
                      fontSize: "0.85rem",
                      mt: 0.5,
                    }}
                  >
                    Agrega platillos desde el menú
                  </Typography>
                </Box>
              ) : (
                <Stack spacing={2}>
                  <AnimatePresence initial={false}>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "#FFFFFF",
                            border: "1px solid rgba(196,154,108,0.1)",
                            borderRadius: "16px",
                            p: 2,
                          }}
                        >
                          <Stack direction="row" spacing={1.5}>
                            <Box
                              sx={{
                                width: 56,
                                height: 56,
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.8rem",
                                borderRadius: "12px",
                                background:
                                  "linear-gradient(160deg, #FAF6F2 0%, #F0EAE4 100%)",
                              }}
                            >
                              {item.image}
                            </Box>

                            <Box sx={{ flex: 1, minWidth: 0 }}>
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                spacing={1}
                              >
                                <Typography
                                  sx={{
                                    fontFamily: '"Playfair Display", serif',
                                    fontWeight: 700,
                                    color: "#2C1810",
                                    fontSize: "0.95rem",
                                    lineHeight: 1.3,
                                  }}
                                >
                                  {item.name}
                                </Typography>
                                <IconButton
                                  onClick={() => onRemove(item.id)}
                                  size="small"
                                  sx={{ color: "rgba(44,24,16,0.3)", mt: -0.5 }}
                                >
                                  <DeleteOutlineIcon fontSize="small" />
                                </IconButton>
                              </Stack>

                              <Typography
                                sx={{
                                  fontFamily: '"Cormorant Garamond", serif',
                                  color: "#C49A6C",
                                  fontWeight: 600,
                                  fontSize: "0.95rem",
                                  mt: 0.25,
                                }}
                              >
                                {item.price}
                              </Typography>
                            </Box>
                          </Stack>

                          <Box sx={{ mt: 1.5 }}>
                            <Typography
                              sx={{
                                fontFamily: '"Cormorant Garamond", serif',
                                color: "rgba(44,24,16,0.4)",
                                fontSize: "0.65rem",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                mb: 0.5,
                              }}
                            >
                              Preparación
                            </Typography>
                            <ToggleButtonGroup
                              value={item.preparation}
                              exclusive
                              size="small"
                              onChange={(_, value: Preparation | null) =>
                                value && onPreparationChange(item.id, value)
                              }
                              sx={{
                                width: "100%",
                                "& .MuiToggleButton-root": {
                                  flex: 1,
                                  textTransform: "none",
                                  fontFamily: '"Cormorant Garamond", serif',
                                  fontSize: "0.8rem",
                                  color: "rgba(44,24,16,0.5)",
                                  borderColor: "rgba(196,154,108,0.2)",
                                  py: 0.4,
                                  "&.Mui-selected": {
                                    backgroundColor: "#2C1810",
                                    color: "#FFFFFF",
                                    "&:hover": {
                                      backgroundColor: "#2C1810",
                                    },
                                  },
                                },
                              }}
                            >
                              <ToggleButton value="normal">Normal</ToggleButton>
                              <ToggleButton value="empanizado">
                                Empanizado
                              </ToggleButton>
                            </ToggleButtonGroup>
                          </Box>

                          <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ mt: 1.5 }}
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={1}
                              sx={{
                                border: "1px solid rgba(196,154,108,0.2)",
                                borderRadius: "10px",
                                px: 0.5,
                              }}
                            >
                              <IconButton
                                size="small"
                                onClick={() =>
                                  onQuantityChange(
                                    item.id,
                                    Math.max(1, item.quantity - 1),
                                  )
                                }
                                sx={{ color: "#2C1810" }}
                              >
                                <RemoveIcon sx={{ fontSize: 16 }} />
                              </IconButton>
                              <Typography
                                sx={{
                                  fontFamily: '"Cormorant Garamond", serif',
                                  fontWeight: 600,
                                  color: "#2C1810",
                                  minWidth: 18,
                                  textAlign: "center",
                                }}
                              >
                                {item.quantity}
                              </Typography>
                              <IconButton
                                size="small"
                                onClick={() =>
                                  onQuantityChange(item.id, item.quantity + 1)
                                }
                                sx={{ color: "#2C1810" }}
                              >
                                <AddIcon sx={{ fontSize: 16 }} />
                              </IconButton>
                            </Stack>

                            <Typography
                              sx={{
                                fontFamily: '"Playfair Display", serif',
                                fontWeight: 700,
                                color: "#2C1810",
                                fontSize: "0.95rem",
                              }}
                            >
                              {formatPrice(
                                parsePrice(item.price) * item.quantity,
                              )}
                            </Typography>
                          </Stack>
                        </Box>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </Stack>
              )}
            </Box>

            {items.length > 0 && (
              <Box
                sx={{
                  px: 3,
                  py: 2.5,
                  borderTop: "1px solid rgba(196,154,108,0.12)",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="baseline"
                  sx={{ mb: 1.5 }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      color: "rgba(44,24,16,0.5)",
                      fontSize: "0.9rem",
                    }}
                  >
                    Subtotal
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                      color: "#2C1810",
                      fontSize: "1.3rem",
                    }}
                  >
                    {formatPrice(subtotal)}
                  </Typography>
                </Stack>
                <Divider
                  sx={{ borderColor: "rgba(196,154,108,0.1)", mb: 1.5 }}
                />
                <Button
                  fullWidth
                  disabled={isProcessing}
                  onClick={handleConfirmOrder}
                  sx={{
                    backgroundColor: "#2C1810",
                    color: "#FFFFFF",
                    borderRadius: "12px",
                    py: 1.2,
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: "0.95rem",
                    letterSpacing: "0.05em",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#1c0f09" },
                    "&.Mui-disabled": {
                      backgroundColor: "#2C1810",
                      color: "rgba(255,255,255,0.6)",
                    },
                  }}
                >
                  {isProcessing ? (
                    <CircularProgress size={20} sx={{ color: "#FFFFFF" }} />
                  ) : (
                    "Confirmar pedido"
                  )}
                </Button>
              </Box>
            )}
          </motion.div>

          <Dialog
            open={showConfirmation}
            onClose={handleCloseConfirmation}
            PaperProps={{
              sx: {
                borderRadius: "16px",
                backgroundColor: "#FDF9F6",
                maxWidth: "400px",
                p: 1,
              },
            }}
          >
            <DialogTitle
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                color: "#2C1810",
                fontSize: "1.3rem",
                pb: 1,
              }}
            >
              Antes de enviar tu pedido
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  color: "rgba(44,24,16,0.8)",
                  fontSize: "1rem",
                }}
              >
                Tu pedido se enviará al WhatsApp de Désimo Rollo.
                <br />
                <br />
                <strong>Importante:</strong> Para que podamos entregar tu
                pedido, deberás enviar el comprobante de pago en el mismo chat
                de WhatsApp.
                <br />
                <br />
                ¿Deseas continuar?
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2, gap: 1 }}>
              <Button
                onClick={handleCloseConfirmation}
                sx={{
                  backgroundColor: "transparent",
                  color: "#2C1810",
                  borderRadius: "12px",
                  py: 1,
                  flex: 1,
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "0.95rem",
                  textTransform: "none",
                  border: "1px solid rgba(196,154,108,0.3)",
                  "&:hover": { backgroundColor: "rgba(196,154,108,0.05)" },
                }}
              >
                Cancelar
              </Button>
              <Button
                onClick={handleSendToWhatsApp}
                disabled={isProcessing}
                sx={{
                  backgroundColor: "#2C1810",
                  color: "#FFFFFF",
                  borderRadius: "12px",
                  py: 1,
                  flex: 1,
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "0.95rem",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#1c0f09" },
                  "&.Mui-disabled": {
                    backgroundColor: "#2C1810",
                    color: "rgba(255,255,255,0.6)",
                  },
                }}
              >
                {isProcessing ? (
                  <CircularProgress size={20} sx={{ color: "#FFFFFF" }} />
                ) : (
                  "Enviar a WhatsApp"
                )}
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </AnimatePresence>
  );
};

const CART_STORAGE_KEY = "desimo_rollo_cart";

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    if (items.length === 0) {
      localStorage.removeItem(CART_STORAGE_KEY);
    } else {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [items]);

  const addItem = (menuItem: {
    id: number;
    name: string;
    price: string;
    image: string;
  }) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === menuItem.id);
      if (existing) {
        return prev.map((i) =>
          i.id === menuItem.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [
        ...prev,
        { ...menuItem, quantity: 1, preparation: "normal" as Preparation },
      ];
    });
  };

  const updateQuantity = (id: number, quantity: number) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)));

  const updatePreparation = (id: number, preparation: Preparation) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, preparation } : i)),
    );

  const removeItem = (id: number) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  return { items, addItem, updateQuantity, updatePreparation, removeItem };
};

export default CartPanel;
