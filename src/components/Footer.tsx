import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Stack,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useLocation, useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const GOLD = "#C49A6C";
const GOLD_SOFT = "rgba(196, 154, 108, 0.35)";
const CREAM = "#F5EDE8";

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Inicio", id: "inicio" },
    { label: "Menú", id: "menu" },
    { label: "Promociones", id: "promociones" },
    { label: "Contacto", id: "contact" },
  ];

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 18 }} />,
      value: "Calle Principal #123, Ciudad",
      detail: "Colonia Centro, CP 12345",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 18 }} />,
      value: "(55) 1234-5678",
      detail: "Pedidos",
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 18 }} />,
      value: "12:00 PM – 11:00 PM",
      detail: "Todos los días",
    },
  ];

  const handleNavigation = (id: string) => {
    const scrollToSection = () => {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    };

    if (location.pathname === "/") {
      scrollToSection();
    } else {
      navigate("/");
      setTimeout(scrollToSection, 100);
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1A1410",
        color: "#F5EDE8",
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

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "60%",
          background: `radial-gradient(circle at center, rgba(196, 154, 108, 0.03) 0%, transparent 70%)`,
          borderRadius: "50%",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 5, md: 6 } }}>
          <Grid container spacing={{ xs: 6, md: 4 }}>
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 3,
                    cursor: "pointer",
                    width: "fit-content",
                  }}
                  onClick={() => handleNavigation("inicio")}
                >
                  <Box
                    component="img"
                    src="/images/logo.jpeg"
                    alt="Décimo Rollo"
                    sx={{
                      height: 52,
                      width: 52,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: `1px solid ${GOLD_SOFT}`,
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 600,
                        fontSize: "1.3rem",
                        letterSpacing: "0.08em",
                        color: CREAM,
                        lineHeight: 1,
                      }}
                    >
                      Décimo Rollo
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.72rem",
                        letterSpacing: "0.06em",
                        color: GOLD,
                        fontWeight: 400,
                        fontFamily: '"Cormorant Garamond", serif',
                        fontStyle: "italic",
                        mt: 0.3,
                      }}
                    >
                      Sushi &amp; cocina japonesa
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    color: "rgba(245, 237, 232, 0.55)",
                    fontSize: "1.05rem",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    maxWidth: 380,
                    mb: 3.5,
                  }}
                >
                  Donde la tradición japonesa se encuentra con la elegancia
                  contemporánea, plato a plato.
                </Typography>

                <Stack direction="row" spacing={1}>
                  {[FacebookIcon, InstagramIcon, YouTubeIcon].map((Icon, i) => (
                    <IconButton
                      key={i}
                      size="small"
                      sx={{
                        color: "rgba(245, 237, 232, 0.45)",
                        width: 36,
                        height: 36,
                        border: "1px solid rgba(245, 237, 232, 0.12)",
                        borderRadius: "50%",
                        transition: "color 0.25s ease, border-color 0.25s ease",
                        "&:hover": {
                          color: GOLD,
                          borderColor: GOLD_SOFT,
                        },
                      }}
                    >
                      <Icon sx={{ fontSize: 17 }} />
                    </IconButton>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            <Grid item xs={6} md={2.5}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 500,
                    color: CREAM,
                    fontSize: "0.95rem",
                    letterSpacing: "0.04em",
                    mb: 2.5,
                  }}
                >
                  Navegación
                </Typography>
                <Stack spacing={1.4}>
                  {navLinks.map((link) => (
                    <Typography
                      key={link.label}
                      onClick={() => handleNavigation(link.id)}
                      sx={{
                        fontFamily: '"Cormorant Garamond", serif',
                        color: "rgba(245, 237, 232, 0.55)",
                        fontSize: "0.98rem",
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                        cursor: "pointer",
                        width: "fit-content",
                        transition: "color 0.25s ease",
                        "&:hover": { color: GOLD },
                      }}
                    >
                      {link.label}
                    </Typography>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            <Grid item xs={6} md={4.5}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 500,
                    color: CREAM,
                    fontSize: "0.95rem",
                    letterSpacing: "0.04em",
                    mb: 2.5,
                  }}
                >
                  Visítanos
                </Typography>
                <Stack spacing={2}>
                  {contactInfo.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        gap: 1.4,
                        alignItems: "flex-start",
                      }}
                    >
                      <Box sx={{ color: GOLD, mt: 0.4 }}>{item.icon}</Box>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: '"Cormorant Garamond", serif',
                            color: CREAM,
                            fontSize: "0.98rem",
                            fontWeight: 400,
                            lineHeight: 1.4,
                          }}
                        >
                          {item.value}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Cormorant Garamond", serif',
                            color: "rgba(245, 237, 232, 0.4)",
                            fontSize: "0.85rem",
                            fontWeight: 300,
                            mt: 0.2,
                          }}
                        >
                          {item.detail}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            opacity: 0.5,
          }}
        >
          <Box
            sx={{
              flex: 1,
              height: "1px",
              backgroundColor: "rgba(245, 237, 232, 0.08)",
            }}
          />
          <Box
            sx={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              border: `1px solid ${GOLD}`,
            }}
          />
          <Box
            sx={{
              flex: 1,
              height: "1px",
              backgroundColor: "rgba(245, 237, 232, 0.08)",
            }}
          />
        </Box>

        <Box
          sx={{
            py: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              color: "rgba(245, 237, 232, 0.35)",
              fontSize: "0.82rem",
              letterSpacing: "0.02em",
            }}
          >
            © {new Date().getFullYear()} Décimo Rollo. Todos los derechos
            reservados.
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              color: "rgba(245, 237, 232, 0.35)",
              fontSize: "0.82rem",
            }}
          >
            Diseñado por{" "}
            <Link
              href="https://alonsdev.com"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                color: GOLD_SOFT,
                transition: "color 0.25s ease",
                "&:hover": { color: GOLD },
              }}
            >
              AlonsDev
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
