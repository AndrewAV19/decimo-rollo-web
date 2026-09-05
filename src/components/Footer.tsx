import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Stack,
  Divider,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useLocation, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const footerLinks = {
    Navegación: [
      { label: "Inicio", id: "inicio" },
      { label: "Menú", id: "menu" },
      { label: "Promociones", id: "promociones" },
      { label: "Contacto", id: "contact" },
    ],
    Información: [
      "Política de Privacidad",
      "Términos y Condiciones",
      "Preguntas Frecuentes",
    ],
    Contacto: ["Dirección", "Teléfono", "Email", "Horario"],
  };

  const handleNavigation = (id: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
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

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    cursor: "pointer",
                  }}
                  onClick={() => handleNavigation("inicio")}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      component="img"
                      src="/images/logo.jpeg"
                      alt="Décimo Rollo"
                      sx={{
                        height: 60,
                        width: 60,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid rgba(196, 154, 108, 0.3)",
                        boxShadow: "0 4px 20px rgba(196, 154, 108, 0.15)",
                      }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 700,
                          fontSize: "1.4rem",
                          letterSpacing: "0.15em",
                          color: "#F5EDE8",
                          lineHeight: 1.1,
                        }}
                      >
                        DÉCIMO ROLLO
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "0.55rem",
                          letterSpacing: "0.4em",
                          color: "#C49A6C",
                          fontWeight: 300,
                          textTransform: "uppercase",
                          fontFamily: '"Cormorant Garamond", serif',
                        }}
                      >
                        Sushi & Japanese Cuisine
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      color: "rgba(245, 237, 232, 0.6)",
                      fontSize: "0.95rem",
                      fontWeight: 300,
                      lineHeight: 1.8,
                      maxWidth: 400,
                    }}
                  >
                    Una experiencia culinaria única donde la tradición japonesa
                    se encuentra con la elegancia moderna.
                  </Typography>

                  <Stack direction="row" spacing={1.5}>
                    <IconButton
                      sx={{
                        color: "rgba(245, 237, 232, 0.5)",
                        padding: 1,
                        border: "1px solid rgba(245, 237, 232, 0.1)",
                        borderRadius: "50%",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#C49A6C",
                          borderColor: "#C49A6C",
                          backgroundColor: "rgba(196, 154, 108, 0.1)",
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      <FacebookIcon sx={{ fontSize: 22 }} />
                    </IconButton>
                    <IconButton
                      sx={{
                        color: "rgba(245, 237, 232, 0.5)",
                        padding: 1,
                        border: "1px solid rgba(245, 237, 232, 0.1)",
                        borderRadius: "50%",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#C49A6C",
                          borderColor: "#C49A6C",
                          backgroundColor: "rgba(196, 154, 108, 0.1)",
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      <InstagramIcon sx={{ fontSize: 22 }} />
                    </IconButton>

                    <IconButton
                      sx={{
                        color: "rgba(245, 237, 232, 0.5)",
                        padding: 1,
                        border: "1px solid rgba(245, 237, 232, 0.1)",
                        borderRadius: "50%",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#C49A6C",
                          borderColor: "#C49A6C",
                          backgroundColor: "rgba(196, 154, 108, 0.1)",
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      <YouTubeIcon sx={{ fontSize: 22 }} />
                    </IconButton>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600,
                    color: "#F5EDE8",
                    fontSize: "1rem",
                    letterSpacing: "0.1em",
                    mb: 2.5,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      width: 30,
                      height: 2,
                      backgroundColor: "#C49A6C",
                      opacity: 0.5,
                    },
                  }}
                >
                  Navegación
                </Typography>
                <Stack spacing={1.5}>
                  {footerLinks["Navegación"].map((link) => (
                    <Typography
                      key={link.label}
                      onClick={() => handleNavigation(link.id)}
                      sx={{
                        fontFamily: '"Cormorant Garamond", serif',
                        color: "rgba(245, 237, 232, 0.6)",
                        fontSize: "0.95rem",
                        fontWeight: 300,
                        transition: "all 0.3s ease",
                        letterSpacing: "0.05em",
                        cursor: "pointer",
                        "&:hover": {
                          color: "#C49A6C",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      {link.label}
                    </Typography>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600,
                    color: "#F5EDE8",
                    fontSize: "1rem",
                    letterSpacing: "0.1em",
                    mb: 2.5,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      width: 30,
                      height: 2,
                      backgroundColor: "#C49A6C",
                      opacity: 0.5,
                    },
                  }}
                >
                  Información
                </Typography>
                <Stack spacing={1.5}>
                  {footerLinks["Información"].map((link) => (
                    <Typography
                      key={link}
                      onClick={() => {
                        /* Puedes agregar lógica aquí */
                      }}
                      sx={{
                        fontFamily: '"Cormorant Garamond", serif',
                        color: "rgba(245, 237, 232, 0.6)",
                        fontSize: "0.95rem",
                        fontWeight: 300,
                        transition: "all 0.3s ease",
                        letterSpacing: "0.05em",
                        cursor: "pointer",
                        "&:hover": {
                          color: "#C49A6C",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        <Divider
          sx={{
            borderColor: "rgba(245, 237, 232, 0.06)",
          }}
        />

        <Box
          sx={{
            py: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              color: "rgba(245, 237, 232, 0.3)",
              fontSize: "0.8rem",
              letterSpacing: "0.05em",
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} Décimo Rollo. Todos los derechos
            reservados.
            <Box
              component="span"
              sx={{
                display: "block",
                mt: 0.5,
              }}
            >
              Diseñado y desarrollado por{" "}
              <Link
                href="https://alonsdev.com"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                  color: "rgba(196, 154, 108, 0.7)",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#C49A6C",
                  },
                }}
              >
                AlonsDev
              </Link>
            </Box>
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link
              href="#"
              underline="none"
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                color: "rgba(245, 237, 232, 0.3)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#C49A6C",
                },
              }}
            >
              Privacidad
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                color: "rgba(245, 237, 232, 0.3)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#C49A6C",
                },
              }}
            >
              Términos
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                color: "rgba(245, 237, 232, 0.3)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#C49A6C",
                },
              }}
            >
              Cookies
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
