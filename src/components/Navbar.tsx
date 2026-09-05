import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box,
  Container,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Menú", href: "#menu" },
    { label: "Promociones", href: "#promociones" },
    { label: "Nosotros", href: "#nosotros" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(255, 248, 245, 0.85)",
          borderBottom: "1px solid rgba(180, 130, 80, 0.15)",
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              py: 1.5,
              px: { xs: 1, sm: 2 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src="/images/logo.jpeg"
                alt="Décimo Rollo"
                sx={{
                  height: { xs: 42, sm: 52 },
                  width: { xs: 42, sm: 52 },
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid rgba(180, 130, 80, 0.3)",
                  boxShadow: "0 4px 20px rgba(180, 130, 80, 0.15)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Playfair Display", "Georgia", serif',
                    fontWeight: 700,
                    fontSize: { xs: "1.1rem", sm: "1.4rem" },
                    letterSpacing: "0.15em",
                    lineHeight: 1.1,
                    color: "#2C1810",
                    textShadow: "0 1px 2px rgba(0,0,0,0.05)",
                  }}
                >
                  DÉCIMO ROLLO
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: { xs: "0.5rem", sm: "0.6rem" },
                    letterSpacing: "0.4em",
                    color: "#8B6B4A",
                    fontWeight: 300,
                    textTransform: "uppercase",
                    fontFamily: '"Cormorant Garamond", serif',
                  }}
                >
                  Sushi & Japanese Cuisine
                </Typography>
              </Box>
            </motion.div>

            {!isMobile ? (
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <Button
                      href={item.href}
                      sx={{
                        color: "#2C1810",
                        fontSize: "0.85rem",
                        fontWeight: 400,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        padding: "6px 16px",
                        borderRadius: "30px",
                        fontFamily: '"Cormorant Garamond", serif',
                        transition: "all 0.3s ease",
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 4,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 0,
                          height: "2px",
                          backgroundColor: "#C49A6C",
                          transition: "width 0.3s ease",
                        },
                        "&:hover": {
                          backgroundColor: "rgba(196, 154, 108, 0.1)",
                          color: "#C49A6C",
                          "&::after": {
                            width: "60%",
                          },
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            ) : (
              <IconButton
                color="default"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  color: "#2C1810",
                  padding: 1,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "rotate(90deg)",
                  },
                }}
              >
                <MenuIcon sx={{ fontSize: 28 }} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            backgroundColor: "#FDF9F6",
            width: 320,
            padding: 3,
            boxShadow: "-10px 0 40px rgba(0,0,0,0.05)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mb: 3,
          }}
        >
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: "#2C1810",
              padding: 1,
              "&:hover": {
                backgroundColor: "rgba(196, 154, 108, 0.1)",
              },
            }}
          >
            <CloseIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box
            component="img"
            src="/images/logo.jpeg"
            alt="Décimo Rollo"
            sx={{
              height: 80,
              width: 80,
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid rgba(180, 130, 80, 0.2)",
              mb: 2,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Playfair Display", serif',
              color: "#2C1810",
              letterSpacing: "0.1em",
              fontWeight: 700,
            }}
          >
            DÉCIMO ROLLO
          </Typography>
        </Box>

        <Divider
          sx={{
            borderColor: "rgba(180, 130, 80, 0.15)",
            mb: 3,
          }}
        />

        <List sx={{ padding: 0 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.label}
              onClick={handleDrawerToggle}
              component="a"
              href={item.href}
              sx={{
                justifyContent: "center",
                padding: "14px 0",
                transition: "all 0.3s ease",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "rgba(196, 154, 108, 0.08)",
                  transform: "translateX(4px)",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: {
                    textAlign: "center",
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: "1.1rem",
                    letterSpacing: "0.15em",
                    fontWeight: 400,
                    color: "#2C1810",
                    textTransform: "uppercase",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
