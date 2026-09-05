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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const menuItems = ["Inicio", "Menú", "Especiales", "Nosotros", "Reservas"];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255,255,255,0.9)",
        borderBottom: "1px solid rgba(212,165,116,0.2)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h4"
              color="primary"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                letterSpacing: "0.1em",
              }}
            >
              SAKURA
              <Typography
                component="span"
                variant="caption"
                sx={{
                  display: "block",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  color: "secondary.main",
                  mt: -0.5,
                }}
              >
                SUSHI & JAPANESE CUISINE
              </Typography>
            </Typography>
          </motion.div>

          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    color="primary"
                    sx={{
                      fontSize: "0.9rem",
                      letterSpacing: "0.1em",
                      "&:hover": {
                        color: "secondary.main",
                      },
                    }}
                  >
                    {item}
                  </Button>
                </motion.div>
              ))}
            </Box>
          ) : (
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 280, pt: 4 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item}
              onClick={handleDrawerToggle}
              sx={{
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "rgba(212,165,116,0.1)",
                },
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  sx: {
                    textAlign: "center",
                    letterSpacing: "0.1em",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
