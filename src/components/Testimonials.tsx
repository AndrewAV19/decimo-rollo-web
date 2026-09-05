import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Paper,
  TextField,
  Button,
  Stack,
  IconButton,
  Chip,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import SendIcon from "@mui/icons-material/Send";
import VerifiedIcon from "@mui/icons-material/Verified";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  dish?: string;
}

const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "María Fernández",
    avatar: "MF",
    rating: 5,
    date: "15 de enero, 2026",
    comment:
      "La mejor experiencia de sushi que he tenido fuera de Japón. El sashimi estaba increíblemente fresco y el servicio fue impecable.",
    verified: true,
    dish: "Sashimi Deluxe",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    avatar: "CR",
    rating: 5,
    date: "12 de enero, 2026",
    comment:
      "Un lugar elegante con una atmósfera acogedora. Los rolls Promociones son una obra de arte culinaria.",
    verified: true,
    dish: "Rolls Promociones",
  },
  {
    id: 3,
    name: "Ana Martínez",
    avatar: "AM",
    rating: 4,
    date: "10 de enero, 2026",
    comment:
      "Excelente atención y comida deliciosa. El temaki premium es mi favorito.",
    verified: false,
    dish: "Temaki Premium",
  },
  {
    id: 4,
    name: "David López",
    avatar: "DL",
    rating: 5,
    date: "8 de enero, 2026",
    comment:
      "Un verdadero tesoro escondido. La sopa miso es la mejor que he probado.",
    verified: true,
    dish: "Sopa Miso",
  },
];

const Testimonials: React.FC = () => {
  const [testimonials] = useState<Testimonial[]>(initialTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    rating: 5,
  });
  const [submitted, setSubmitted] = useState(false);

  const primaryColor = "#8CB3A8";
  const lightColor = "#C4D9D2";
  const bgColor = "#F6FAF8";
  const textColor = "#1C2E28";

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3,
  );
  const remaining = 3 - visibleTestimonials.length;
  if (remaining > 0) {
    visibleTestimonials.push(...testimonials.slice(0, remaining));
  }

  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        backgroundColor: bgColor,
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
          background: `linear-gradient(90deg, ${primaryColor} 0%, ${lightColor} 50%, ${primaryColor} 100%)`,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "40%",
          height: "60%",
          background: `radial-gradient(circle, ${primaryColor}08 0%, transparent 70%)`,
          borderRadius: "50%",
        }}
      />

      <Container maxWidth="xl">
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
                color: primaryColor,
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
                  backgroundColor: `${primaryColor}4D`,
                },
              }}
            >
              Testimonios
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                color: textColor,
                fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem" },
                mt: 1.5,
                mb: 1,
                letterSpacing: "0.02em",
              }}
            >
              Lo que dicen{" "}
              <span style={{ color: primaryColor }}>nuestros clientes</span>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                color: `${textColor}80`,
                fontSize: { xs: "0.95rem", sm: "1.1rem" },
                maxWidth: 500,
                mx: "auto",
                fontWeight: 300,
                letterSpacing: "0.03em",
              }}
            >
              Experiencias reales de quienes han disfrutado nuestra cocina
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6}>
          <Grid item xs={12} lg={7}>
            <Box sx={{ position: "relative" }}>
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: "absolute",
                  left: -20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 4px 20px rgba(44, 36, 32, 0.06)",
                  "&:hover": {
                    backgroundColor: primaryColor,
                    color: "#FFFFFF",
                  },
                  display: { xs: "none", md: "flex" },
                }}
              >
                <KeyboardArrowLeftIcon />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  right: -20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 4px 20px rgba(44, 36, 32, 0.06)",
                  "&:hover": {
                    backgroundColor: primaryColor,
                    color: "#FFFFFF",
                  },
                  display: { xs: "none", md: "flex" },
                }}
              >
                <KeyboardArrowRightIcon />
              </IconButton>

              <Grid container spacing={3}>
                <AnimatePresence mode="wait">
                  {visibleTestimonials.map((testimonial, index) => (
                    <Grid item xs={12} md={4} key={testimonial.id}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        style={{ height: "100%" }}
                      >
                        <Card
                          sx={{
                            height: "100%",
                            borderRadius: "20px",
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0 2px 16px rgba(44, 36, 32, 0.04)",
                            border: `1px solid ${primaryColor}14`,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              boxShadow: `0 8px 32px ${primaryColor}1A`,
                              border: `1px solid ${primaryColor}26`,
                            },
                            position: "relative",
                            overflow: "visible",
                          }}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              top: -10,
                              left: 20,
                              color: primaryColor,
                              opacity: 0.08,
                              fontSize: 40,
                            }}
                          >
                            <FormatQuoteIcon sx={{ fontSize: 40 }} />
                          </Box>

                          <CardContent sx={{ p: 3 }}>
                            <Stack spacing={1.5}>
                              <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1.5}
                              >
                                <Avatar
                                  sx={{
                                    bgcolor: primaryColor,
                                    color: "#FFFFFF",
                                    width: 44,
                                    height: 44,
                                    fontFamily: '"Cormorant Garamond", serif',
                                    fontWeight: 600,
                                    fontSize: "1rem",
                                  }}
                                >
                                  {testimonial.avatar}
                                </Avatar>
                                <Box>
                                  <Typography
                                    sx={{
                                      fontFamily: '"Cormorant Garamond", serif',
                                      fontWeight: 600,
                                      color: textColor,
                                      fontSize: "0.95rem",
                                    }}
                                  >
                                    {testimonial.name}
                                  </Typography>
                                  <Stack
                                    direction="row"
                                    spacing={0.5}
                                    alignItems="center"
                                  >
                                    <Rating
                                      value={testimonial.rating}
                                      readOnly
                                      size="small"
                                      icon={
                                        <StarIcon
                                          sx={{
                                            fontSize: 14,
                                            color: primaryColor,
                                          }}
                                        />
                                      }
                                      emptyIcon={
                                        <StarIcon
                                          sx={{
                                            fontSize: 14,
                                            color: `${primaryColor}33`,
                                          }}
                                        />
                                      }
                                    />
                                    <Typography
                                      variant="caption"
                                      sx={{
                                        color: `${textColor}4D`,
                                        fontSize: "0.6rem",
                                        ml: 0.5,
                                      }}
                                    >
                                      {testimonial.date}
                                    </Typography>
                                  </Stack>
                                </Box>
                                {testimonial.verified && (
                                  <VerifiedIcon
                                    sx={{
                                      color: "#A8C4A8",
                                      fontSize: 16,
                                      ml: "auto",
                                    }}
                                  />
                                )}
                              </Stack>

                              <Typography
                                variant="body2"
                                sx={{
                                  fontFamily: '"Cormorant Garamond", serif',
                                  color: `${textColor}B3`,
                                  fontSize: "0.9rem",
                                  lineHeight: 1.7,
                                  fontStyle: "italic",
                                  minHeight: 60,
                                }}
                              >
                                "{testimonial.comment}"
                              </Typography>

                              {testimonial.dish && (
                                <Chip
                                  label={`🍽️ ${testimonial.dish}`}
                                  size="small"
                                  sx={{
                                    backgroundColor: `${primaryColor}0D`,
                                    color: primaryColor,
                                    fontSize: "0.65rem",
                                    fontFamily: '"Cormorant Garamond", serif',
                                    alignSelf: "flex-start",
                                    borderRadius: "20px",
                                    height: 24,
                                    border: `1px solid ${primaryColor}1A`,
                                  }}
                                />
                              )}
                            </Stack>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </AnimatePresence>
              </Grid>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  mt: 4,
                }}
              >
                {testimonials.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor:
                        index === currentIndex
                          ? primaryColor
                          : `${primaryColor}33`,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: primaryColor,
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} lg={5}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: "24px",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 4px 24px rgba(44, 36, 32, 0.04)",
                  border: `1px solid ${primaryColor}14`,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    color: textColor,
                    fontSize: "1.5rem",
                    mb: 1,
                  }}
                >
                  Comparte tu experiencia
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    color: `${textColor}80`,
                    fontSize: "0.95rem",
                    mb: 3,
                  }}
                >
                  Tu opinión nos ayuda a mejorar
                </Typography>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        py: 4,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: '"Playfair Display", serif',
                          color: primaryColor,
                          fontSize: "2rem",
                          mb: 1,
                        }}
                      >
                        ✨
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: '"Cormorant Garamond", serif',
                          color: textColor,
                          fontSize: "1.2rem",
                          fontWeight: 600,
                        }}
                      >
                        ¡Gracias por tu testimonio!
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: '"Cormorant Garamond", serif',
                          color: `${textColor}80`,
                          fontSize: "0.9rem",
                          mt: 0.5,
                        }}
                      >
                        Tu opinión es muy valiosa para nosotros
                      </Typography>
                    </Box>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={2.5}>
                      <TextField
                        label="Nombre"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            "& fieldset": {
                              borderColor: `${primaryColor}33`,
                            },
                            "&:hover fieldset": {
                              borderColor: `${primaryColor}66`,
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: primaryColor,
                            },
                          },
                          "& .MuiInputLabel-root": {
                            fontFamily: '"Cormorant Garamond", serif',
                            color: `${textColor}66`,
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: primaryColor,
                          },
                        }}
                      />

                      <Box>
                        <Typography
                          sx={{
                            fontFamily: '"Cormorant Garamond", serif',
                            color: `${textColor}99`,
                            fontSize: "0.9rem",
                            mb: 1,
                          }}
                        >
                          Calificación
                        </Typography>
                        <Rating
                          value={formData.rating}
                          onChange={(_, newValue) =>
                            setFormData({ ...formData, rating: newValue || 5 })
                          }
                          size="large"
                          icon={<StarIcon sx={{ color: primaryColor }} />}
                          emptyIcon={
                            <StarIcon sx={{ color: `${primaryColor}33` }} />
                          }
                        />
                      </Box>

                      <TextField
                        label="Comentario"
                        placeholder="Cuéntanos tu experiencia..."
                        value={formData.comment}
                        onChange={(e) =>
                          setFormData({ ...formData, comment: e.target.value })
                        }
                        required
                        multiline
                        rows={4}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            "& fieldset": {
                              borderColor: `${primaryColor}33`,
                            },
                            "&:hover fieldset": {
                              borderColor: `${primaryColor}66`,
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: primaryColor,
                            },
                          },
                          "& .MuiInputLabel-root": {
                            fontFamily: '"Cormorant Garamond", serif',
                            color: `${textColor}66`,
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: primaryColor,
                          },
                        }}
                      />

                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        endIcon={<SendIcon />}
                        sx={{
                          backgroundColor: primaryColor,
                          color: "#FFFFFF",
                          fontFamily: '"Cormorant Garamond", serif',
                          fontSize: "0.9rem",
                          fontWeight: 500,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "12px",
                          borderRadius: "12px",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: lightColor,
                            boxShadow: `0 8px 30px ${primaryColor}4D`,
                          },
                        }}
                      >
                        Enviar testimonio
                      </Button>
                    </Stack>
                  </form>
                )}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
