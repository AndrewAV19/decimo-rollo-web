import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import GroupsIcon from "@mui/icons-material/Groups";

const MissionVision: React.FC = () => {
  const values = [
    {
      icon: <RestaurantIcon sx={{ fontSize: 28 }} />,
      title: "Excelencia Culinaria",
      description:
        "Buscamos la perfección en cada plato, utilizando ingredientes frescos y técnicas tradicionales japonesas.",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 28 }} />,
      title: "Hospitalidad Japonesa",
      description:
        "Brindamos una experiencia acogedora y personalizada, honrando la tradición del Omotenashi.",
    },
    {
      icon: <VolunteerActivismIcon sx={{ fontSize: 28 }} />,
      title: "Sostenibilidad",
      description:
        "Comprometidos con prácticas responsables y el respeto por el medio ambiente y los productos del mar.",
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 28 }} />,
      title: "Innovación",
      description:
        "Fusionamos la tradición con la creatividad para ofrecer experiencias gastronómicas únicas.",
    },
  ];

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

      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "40%",
          height: "60%",
          background:
            "radial-gradient(circle, rgba(196, 154, 108, 0.04) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: "40%",
          height: "60%",
          background:
            "radial-gradient(circle, rgba(196, 154, 108, 0.04) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 8 } }}>
            <Typography
              variant="overline"
              sx={{
                color: "#C49A6C",
                letterSpacing: "0.4em",
                fontSize: { xs: "0.6rem", sm: "0.75rem" },
                fontWeight: 300,
                fontFamily: '"Cormorant Garamond", serif',
                display: "inline-block",
                position: "relative",
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
              Nuestra Esencia
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
              Misión y <span style={{ color: "#C49A6C" }}>Visión</span>
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
              Los principios que guían nuestra filosofía gastronómica
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ height: "100%" }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "24px",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 4px 24px rgba(44, 24, 16, 0.04)",
                  border: "1px solid rgba(196, 154, 108, 0.08)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    boxShadow: "0 12px 48px rgba(196, 154, 108, 0.12)",
                    border: "1px solid rgba(196, 154, 108, 0.15)",
                    transform: "translateY(-4px)",
                  },
                  position: "relative",
                  overflow: "visible",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -15,
                    left: 30,
                    backgroundColor: "#C49A6C",
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 20px rgba(196, 154, 108, 0.3)",
                  }}
                >
                  <RocketLaunchIcon sx={{ color: "#FFFFFF", fontSize: 26 }} />
                </Box>

                <CardContent sx={{ p: 4, pt: 5 }}>
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                      color: "#2C1810",
                      fontSize: "1.8rem",
                      mb: 2,
                    }}
                  >
                    Misión
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      color: "rgba(44, 24, 16, 0.7)",
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                      fontWeight: 300,
                      mb: 3,
                    }}
                  >
                    Ofrecer una experiencia gastronómica excepcional que combine
                    la autenticidad de la cocina japonesa con un toque de
                    elegancia contemporánea, creando momentos inolvidables para
                    nuestros comensales.
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1.5,
                    }}
                  >
                    {[
                      "Calidad",
                      "Autenticidad",
                      "Hospitalidad",
                      "Excelencia",
                    ].map((tag) => (
                      <Box
                        key={tag}
                        sx={{
                          padding: "4px 16px",
                          borderRadius: "20px",
                          backgroundColor: "rgba(196, 154, 108, 0.08)",
                          border: "1px solid rgba(196, 154, 108, 0.1)",
                          fontFamily: '"Cormorant Garamond", serif',
                          color: "#C49A6C",
                          fontSize: "0.75rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ height: "100%" }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "24px",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 4px 24px rgba(44, 24, 16, 0.04)",
                  border: "1px solid rgba(196, 154, 108, 0.08)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    boxShadow: "0 12px 48px rgba(196, 154, 108, 0.12)",
                    border: "1px solid rgba(196, 154, 108, 0.15)",
                    transform: "translateY(-4px)",
                  },
                  position: "relative",
                  overflow: "visible",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -15,
                    left: 30,
                    backgroundColor: "#2C1810",
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 20px rgba(44, 24, 16, 0.3)",
                  }}
                >
                  <VisibilityIcon sx={{ color: "#FFFFFF", fontSize: 26 }} />
                </Box>

                <CardContent sx={{ p: 4, pt: 5 }}>
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                      color: "#2C1810",
                      fontSize: "1.8rem",
                      mb: 2,
                    }}
                  >
                    Visión
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      color: "rgba(44, 24, 16, 0.7)",
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                      fontWeight: 300,
                      mb: 3,
                    }}
                  >
                    Ser reconocidos como el referente de la alta cocina japonesa
                    en la región, destacando por nuestra innovación, calidad y
                    compromiso con la excelencia, mientras preservamos la
                    esencia de la tradición culinaria.
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1.5,
                    }}
                  >
                    {["Innovación", "Excelencia", "Tradición", "Liderazgo"].map(
                      (tag) => (
                        <Box
                          key={tag}
                          sx={{
                            padding: "4px 16px",
                            borderRadius: "20px",
                            backgroundColor: "rgba(44, 24, 16, 0.06)",
                            border: "1px solid rgba(44, 24, 16, 0.08)",
                            fontFamily: '"Cormorant Garamond", serif',
                            color: "#2C1810",
                            fontSize: "0.75rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          {tag}
                        </Box>
                      ),
                    )}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mt: { xs: 6, md: 8 } }}>
            <Typography
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                color: "#2C1810",
                fontSize: { xs: "1.8rem", sm: "2.5rem" },
                textAlign: "center",
                mb: 4,
                letterSpacing: "0.02em",
              }}
            >
              Nuestros <span style={{ color: "#C49A6C" }}>Valores</span>
            </Typography>

            <Grid container spacing={3}>
              {values.map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={value.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    style={{ height: "100%" }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        padding: 3,
                        borderRadius: "20px",
                        backgroundColor: "#FFFFFF",
                        border: "1px solid rgba(196, 154, 108, 0.06)",
                        boxShadow: "0 2px 12px rgba(44, 24, 16, 0.03)",
                        transition: "all 0.4s ease",
                        textAlign: "center",
                        "&:hover": {
                          boxShadow: "0 8px 32px rgba(196, 154, 108, 0.08)",
                          border: "1px solid rgba(196, 154, 108, 0.12)",
                          transform: "translateY(-6px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "inline-flex",
                          padding: 1.5,
                          borderRadius: "50%",
                          backgroundColor: "rgba(196, 154, 108, 0.06)",
                          color: "#C49A6C",
                          mb: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "rgba(196, 154, 108, 0.12)",
                            transform: "scale(1.05)",
                          },
                        }}
                      >
                        {value.icon}
                      </Box>

                      <Typography
                        sx={{
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 600,
                          color: "#2C1810",
                          fontSize: "1.05rem",
                          mb: 1,
                        }}
                      >
                        {value.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: '"Cormorant Garamond", serif',
                          color: "rgba(44, 24, 16, 0.6)",
                          fontSize: "0.9rem",
                          lineHeight: 1.6,
                          fontWeight: 300,
                        }}
                      >
                        {value.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default MissionVision;
