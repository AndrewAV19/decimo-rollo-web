import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Rating,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import StarIcon from "@mui/icons-material/Star";
import EastIcon from "@mui/icons-material/East";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AddIcon from "@mui/icons-material/Add";
import CartPanel, { useCart } from "./Cart/Cart";

const menuItems = [
  {
    id: 1,
    name: "Sashimi Deluxe",
    description:
      "Selección premium de pescado fresco del día cortado por nuestros maestros sushi",
    price: "$45",
    image: "🍣",
    tag: "Popular",
    rating: 4.9,
    category: "Premium",
  },
  {
    id: 2,
    name: "Rolls Promociones",
    description:
      "Ocho rolls artesanales con ingredientes exclusivos y toques de autor",
    price: "$38",
    image: "🍱",
    tag: "Nuevo",
    rating: 4.8,
    category: "Especialidad",
  },
  {
    id: 3,
    name: "Temaki Premium",
    description:
      "Conos de alga nori rellenos con atún fresco y aguacate cremoso",
    price: "$32",
    image: "🌯",
    tag: "Recomendado",
    rating: 4.7,
    category: "Clásico",
  },
  {
    id: 4,
    name: "Sopa Miso",
    description: "Caldo tradicional japonés con tofu sedoso y algas wakame",
    price: "$18",
    image: "🥣",
    rating: 4.6,
    category: "Tradicional",
  },
];

const Menu: React.FC = () => {
  const { items, addItem, updateQuantity, updatePreparation, removeItem } =
    useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (menuItem: (typeof menuItems)[0]) => {
    addItem({
      id: menuItem.id,
      name: menuItem.name,
      price: menuItem.price,
      image: menuItem.image,
    });
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        backgroundColor: "#FDF9F6",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background:
            "linear-gradient(90deg, #C49A6C 0%, #E8D5C4 50%, #C49A6C 100%)",
        }}
      />

      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: { xs: 4, md: 8 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ flex: 1 }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="overline"
                sx={{
                  color: "#C49A6C",
                  letterSpacing: "0.4em",
                  fontSize: { xs: "0.6rem", sm: "0.75rem" },
                  fontWeight: 300,
                  fontFamily: '"Cormorant Garamond", serif',
                  position: "relative",
                  display: "inline-block",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    bottom: -2,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 40,
                    height: 2,
                    backgroundColor: "rgba(196, 154, 108, 0.3)",
                  },
                }}
              >
                Nuestro Menú
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  color: "#2C1810",
                  fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem" },
                  mt: 1.5,
                  mb: 1,
                  letterSpacing: "0.02em",
                }}
              >
                Experiencias{" "}
                <span style={{ color: "#C49A6C" }}>Gastronómicas</span>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  color: "rgba(44, 24, 16, 0.6)",
                  fontSize: { xs: "0.95rem", sm: "1.1rem" },
                  maxWidth: 500,
                  mx: "auto",
                  fontWeight: 300,
                  letterSpacing: "0.03em",
                }}
              >
                Descubre nuestra selección de platos cuidadosamente preparados
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <IconButton
              onClick={() => setCartOpen(true)}
              sx={{
                backgroundColor: "#2C1810",
                color: "#FFFFFF",
                borderRadius: "12px",
                p: 1.5,
                "&:hover": {
                  backgroundColor: "#1c0f09",
                },
              }}
            >
              <Badge
                badgeContent={totalItems}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#C49A6C",
                    color: "#FFFFFF",
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 600,
                    fontSize: "0.7rem",
                    right: -4,
                    top: -4,
                  },
                }}
              >
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {menuItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "20px",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 4px 20px rgba(44, 24, 16, 0.04)",
                    border: "1px solid rgba(196, 154, 108, 0.08)",
                    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    position: "relative",
                    overflow: "visible",
                    "&:hover": {
                      boxShadow: "0 20px 60px rgba(196, 154, 108, 0.15)",
                      border: "1px solid rgba(196, 154, 108, 0.15)",
                    },
                  }}
                >
                  {item.tag && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        zIndex: 2,
                      }}
                    >
                      <Chip
                        label={item.tag}
                        size="small"
                        sx={{
                          backgroundColor:
                            item.tag === "Popular" ? "#C49A6C" : "#2C1810",
                          color: "#FFFFFF",
                          fontSize: "0.6rem",
                          letterSpacing: "0.15em",
                          fontWeight: 400,
                          fontFamily: '"Cormorant Garamond", serif',
                          textTransform: "uppercase",
                          padding: "0 6px",
                          height: 24,
                          "& .MuiChip-label": {
                            padding: "0 10px",
                          },
                        }}
                      />
                    </Box>
                  )}

                  <Box
                    sx={{
                      height: { xs: 180, sm: 200 },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: { xs: "4.5rem", sm: "5.5rem" },
                      background:
                        "linear-gradient(160deg, #FAF6F2 0%, #F0EAE4 100%)",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "20%",
                        right: "20%",
                        height: 1,
                        background:
                          "linear-gradient(90deg, transparent, rgba(196,154,108,0.2), transparent)",
                      },
                    }}
                  >
                    <motion.span
                      initial={{ scale: 0.8, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      style={{ display: "inline-block" }}
                    >
                      {item.image}
                    </motion.span>
                  </Box>

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      p: { xs: 2.5, sm: 3 },
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 0.5,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 700,
                          color: "#2C1810",
                          fontSize: { xs: "1rem", sm: "1.1rem" },
                          letterSpacing: "0.02em",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: '"Cormorant Garamond", serif',
                          fontWeight: 600,
                          color: "#C49A6C",
                          fontSize: { xs: "1.1rem", sm: "1.25rem" },
                          ml: 1,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.price}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: '"Cormorant Garamond", serif',
                        color: "rgba(44, 24, 16, 0.6)",
                        fontSize: "0.9rem",
                        fontWeight: 300,
                        lineHeight: 1.6,
                        mb: 2,
                        flexGrow: 1,
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Divider
                      sx={{
                        borderColor: "rgba(196, 154, 108, 0.08)",
                        mb: 2,
                      }}
                    />

                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Rating
                          value={item.rating}
                          readOnly
                          precision={0.1}
                          size="small"
                          icon={
                            <StarIcon sx={{ fontSize: 16, color: "#C49A6C" }} />
                          }
                          emptyIcon={
                            <StarIcon
                              sx={{
                                fontSize: 16,
                                color: "rgba(196,154,108,0.15)",
                              }}
                            />
                          }
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            fontFamily: '"Cormorant Garamond", serif',
                            color: "rgba(44, 24, 16, 0.5)",
                            fontSize: "0.7rem",
                            ml: 0.5,
                          }}
                        >
                          {item.rating}
                        </Typography>
                      </Stack>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            color: "rgba(44, 24, 16, 0.3)",
                            fontSize: "0.6rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            fontFamily: '"Cormorant Garamond", serif',
                            cursor: "default",
                          }}
                        >
                          <LocalDiningIcon sx={{ fontSize: 14 }} />
                          <Typography
                            variant="caption"
                            sx={{
                              fontFamily: '"Cormorant Garamond", serif',
                              fontSize: "0.65rem",
                            }}
                          >
                            {item.category}
                          </Typography>
                        </Box>

                        <IconButton
                          onClick={() => handleAddToCart(item)}
                          size="small"
                          sx={{
                            backgroundColor: "#2C1810",
                            color: "#FFFFFF",
                            borderRadius: "8px",
                            p: 0.8,
                            "&:hover": {
                              backgroundColor: "#1c0f09",
                            },
                          }}
                        >
                          <AddIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: 48 }}
        >
          <Button
            component={Link}
            to="/menu-completo"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 2,
              cursor: "pointer",
              transition: "all 0.3s ease",
              textDecoration: "none",
              background: "none",
              border: "none",
              padding: 0,
              "&:hover": {
                gap: 3,
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                color: "#2C1810",
                fontSize: "1rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 300,
              }}
            >
              Ver Menú Completo
            </Typography>
            <EastIcon sx={{ color: "#C49A6C", fontSize: 20 }} />
          </Button>
        </motion.div>
      </Container>

      <CartPanel
        open={cartOpen}
        items={items}
        onClose={() => setCartOpen(false)}
        onQuantityChange={updateQuantity}
        onPreparationChange={updatePreparation}
        onRemove={removeItem}
      />
    </Box>
  );
};

export default Menu;
