import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Divider,
  Chip,
  IconButton,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PaymentIcon from "@mui/icons-material/Payment";

const Contact: React.FC = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const whatsappNumber = "+521234567890";
  const bankAccount = {
    bank: "Banco Ejemplo",
    accountNumber: "0123 4567 8901 2345",
    clabe: "012345678901234567",
    owner: "Décimo Rollo S.A. de C.V.",
  };

  const location = {
    address: "Av. Gastronómica #123, Col. Centro, Ciudad de México",
    schedule: "Lunes a Domingo: 1:00 PM - 11:00 PM",
    phone: "+52 55 1234 5678",
    email: "contacto@decimorollo.com",
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        backgroundColor: "#eadcd3",
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
          background: "linear-gradient(90deg, #C49A6C 0%, #E8D5C4 50%, #C49A6C 100%)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "40%",
          height: "60%",
          background: "radial-gradient(circle, rgba(196, 154, 108, 0.04) 0%, transparent 70%)",
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
              Contacto
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
              Estamos <span style={{ color: "#C49A6C" }}>aquí para ti</span>
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
              Visítanos, llámanos o pide a domicilio. Siempre estamos listos para atenderte.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  borderRadius: "24px",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 4px 24px rgba(44, 24, 16, 0.04)",
                  border: "1px solid rgba(196, 154, 108, 0.08)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    boxShadow: "0 12px 48px rgba(196, 154, 108, 0.12)",
                    border: "1px solid rgba(196, 154, 108, 0.15)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                      color: "#2C1810",
                      fontSize: "1.5rem",
                      mb: 3,
                    }}
                  >
                    Información de Contacto
                  </Typography>

                  <Stack spacing={3}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          padding: 1.5,
                          borderRadius: "12px",
                          backgroundColor: "rgba(196, 154, 108, 0.08)",
                          color: "#C49A6C",
                          minWidth: 48,
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <LocationOnIcon />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: '"Playfair Display", serif',
                            fontWeight: 600,
                            color: "#2C1810",
                            fontSize: "0.9rem",
                            mb: 0.5,
                          }}
                        >
                          Dirección
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Cormorant Garamond", serif',
                            color: "rgba(44,24,16,0.7)",
                            fontSize: "0.95rem",
                            fontWeight: 300,
                          }}
                        >
                          {location.address}
                        </Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ borderColor: "rgba(196,154,108,0.08)" }} />

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          padding: 1.5,
                          borderRadius: "12px",
                          backgroundColor: "rgba(196, 154, 108, 0.08)",
                          color: "#C49A6C",
                          minWidth: 48,
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <AccessTimeIcon />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: '"Playfair Display", serif',
                            fontWeight: 600,
                            color: "#2C1810",
                            fontSize: "0.9rem",
                            mb: 0.5,
                          }}
                        >
                          Horario
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Cormorant Garamond", serif',
                            color: "rgba(44,24,16,0.7)",
                            fontSize: "0.95rem",
                            fontWeight: 300,
                          }}
                        >
                          {location.schedule}
                        </Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ borderColor: "rgba(196,154,108,0.08)" }} />

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          padding: 1.5,
                          borderRadius: "12px",
                          backgroundColor: "rgba(196, 154, 108, 0.08)",
                          color: "#C49A6C",
                          minWidth: 48,
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <PhoneIcon />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: '"Playfair Display", serif',
                            fontWeight: 600,
                            color: "#2C1810",
                            fontSize: "0.9rem",
                            mb: 0.5,
                          }}
                        >
                          Teléfono
                        </Typography>
                        <Link
                          href={`tel:${location.phone}`}
                          underline="none"
                          sx={{
                            fontFamily: '"Cormorant Garamond", serif',
                            color: "#C49A6C",
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            "&:hover": {
                              color: "#D4B08C",
                            },
                          }}
                        >
                          {location.phone}
                        </Link>
                      </Box>
                    </Box>

                    <Divider sx={{ borderColor: "rgba(196,154,108,0.08)" }} />

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          padding: 1.5,
                          borderRadius: "12px",
                          backgroundColor: "rgba(196, 154, 108, 0.08)",
                          color: "#C49A6C",
                          minWidth: 48,
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <EmailIcon />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: '"Playfair Display", serif',
                            fontWeight: 600,
                            color: "#2C1810",
                            fontSize: "0.9rem",
                            mb: 0.5,
                          }}
                        >
                          Email
                        </Typography>
                        <Link
                          href={`mailto:${location.email}`}
                          underline="none"
                          sx={{
                            fontFamily: '"Cormorant Garamond", serif',
                            color: "#C49A6C",
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            "&:hover": {
                              color: "#D4B08C",
                            },
                          }}
                        >
                          {location.email}
                        </Link>
                      </Box>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    borderRadius: "24px",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 4px 24px rgba(44, 24, 16, 0.04)",
                    border: "1px solid rgba(196, 154, 108, 0.08)",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      boxShadow: "0 12px 48px rgba(196, 154, 108, 0.12)",
                      border: "1px solid rgba(196, 154, 108, 0.15)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Stack spacing={2.5}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <DeliveryDiningIcon sx={{ color: "#C49A6C", fontSize: 28 }} />
                        <Typography
                          sx={{
                            fontFamily: '"Playfair Display", serif',
                            fontWeight: 700,
                            color: "#2C1810",
                            fontSize: "1.3rem",
                          }}
                        >
                          Servicio a Domicilio
                        </Typography>
                        <Chip
                          label="Disponible"
                          size="small"
                          sx={{
                            backgroundColor: "rgba(76, 175, 80, 0.1)",
                            color: "#4CAF50",
                            fontSize: "0.65rem",
                            fontFamily: '"Cormorant Garamond", serif',
                            fontWeight: 600,
                            height: 24,
                          }}
                        />
                      </Box>

                      <Typography
                        sx={{
                          fontFamily: '"Cormorant Garamond", serif',
                          color: "rgba(44,24,16,0.6)",
                          fontSize: "0.95rem",
                          fontWeight: 300,
                          lineHeight: 1.7,
                        }}
                      >
                        Realiza tu pedido a domicilio. El pago se realiza mediante depósito o transferencia bancaria.
                      </Typography>

                      <Box
                        sx={{
                          backgroundColor: "rgba(196,154,108,0.04)",
                          borderRadius: "16px",
                          p: 3,
                          border: "1px solid rgba(196,154,108,0.08)",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                          <PaymentIcon sx={{ color: "#C49A6C", fontSize: 20 }} />
                          <Typography
                            sx={{
                              fontFamily: '"Playfair Display", serif',
                              fontWeight: 600,
                              color: "#2C1810",
                              fontSize: "0.9rem",
                            }}
                          >
                            Datos Bancarios
                          </Typography>
                        </Box>

                        <Stack spacing={1.5}>
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: '"Cormorant Garamond", serif',
                                color: "rgba(44,24,16,0.4)",
                                fontSize: "0.7rem",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                mb: 0.3,
                              }}
                            >
                              Banco
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: '"Cormorant Garamond", serif',
                                color: "#2C1810",
                                fontSize: "0.95rem",
                                fontWeight: 500,
                              }}
                            >
                              {bankAccount.bank}
                            </Typography>
                          </Box>

                          <Box>
                            <Typography
                              sx={{
                                fontFamily: '"Cormorant Garamond", serif',
                                color: "rgba(44,24,16,0.4)",
                                fontSize: "0.7rem",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                mb: 0.3,
                              }}
                            >
                              Número de Cuenta
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                              <Typography
                                sx={{
                                  fontFamily: '"Cormorant Garamond", serif',
                                  color: "#2C1810",
                                  fontSize: "0.95rem",
                                  fontWeight: 500,
                                  letterSpacing: "0.05em",
                                }}
                              >
                                {bankAccount.accountNumber}
                              </Typography>
                              <IconButton
                                size="small"
                                onClick={() => handleCopy(bankAccount.accountNumber)}
                                sx={{
                                  color: "#C49A6C",
                                  padding: "2px",
                                  "&:hover": {
                                    backgroundColor: "rgba(196,154,108,0.08)",
                                  },
                                }}
                              >
                                <ContentCopyIcon sx={{ fontSize: 16 }} />
                              </IconButton>
                            </Box>
                          </Box>

                          <Box>
                            <Typography
                              sx={{
                                fontFamily: '"Cormorant Garamond", serif',
                                color: "rgba(44,24,16,0.4)",
                                fontSize: "0.7rem",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                mb: 0.3,
                              }}
                            >
                              CLABE
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                              <Typography
                                sx={{
                                  fontFamily: '"Cormorant Garamond", serif',
                                  color: "#2C1810",
                                  fontSize: "0.95rem",
                                  fontWeight: 500,
                                  letterSpacing: "0.05em",
                                }}
                              >
                                {bankAccount.clabe}
                              </Typography>
                              <IconButton
                                size="small"
                                onClick={() => handleCopy(bankAccount.clabe)}
                                sx={{
                                  color: "#C49A6C",
                                  padding: "2px",
                                  "&:hover": {
                                    backgroundColor: "rgba(196,154,108,0.08)",
                                  },
                                }}
                              >
                                <ContentCopyIcon sx={{ fontSize: 16 }} />
                              </IconButton>
                            </Box>
                          </Box>

                          <Typography
                            sx={{
                              fontFamily: '"Cormorant Garamond", serif',
                              color: "rgba(44,24,16,0.4)",
                              fontSize: "0.8rem",
                              fontStyle: "italic",
                              mt: 0.5,
                            }}
                          >
                            {bankAccount.owner}
                          </Typography>
                        </Stack>
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontFamily: '"Cormorant Garamond", serif',
                            color: "rgba(44,24,16,0.5)",
                            fontSize: "0.8rem",
                            textAlign: "center",
                            mb: 1.5,
                          }}
                        >
                          Envía tu comprobante de pago por WhatsApp para confirmar tu pedido
                        </Typography>

                        <Button
                          variant="contained"
                          startIcon={<WhatsAppIcon />}
                          href={`https://wa.me/${whatsappNumber}`}
                          target="_blank"
                          fullWidth
                          sx={{
                            backgroundColor: "#25D366",
                            color: "#FFFFFF",
                            fontFamily: '"Cormorant Garamond", serif',
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            textTransform: "none",
                            borderRadius: "14px",
                            padding: "14px",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              backgroundColor: "#1DA851",
                              boxShadow: "0 8px 30px rgba(37, 211, 102, 0.35)",
                              transform: "translateY(-2px)",
                            },
                          }}
                        >
                          Enviar comprobante por WhatsApp
                        </Button>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    borderRadius: "24px",
                    backgroundColor: "#2C1810",
                    color: "#F5EDE8",
                    boxShadow: "0 4px 24px rgba(44, 24, 16, 0.15)",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      boxShadow: "0 12px 48px rgba(44, 24, 16, 0.25)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <StorefrontIcon sx={{ fontSize: 48, color: "#C49A6C", mb: 1.5 }} />
                    <Typography
                      sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 700,
                        fontSize: "1.3rem",
                        mb: 1,
                      }}
                    >
                      Visita nuestra sucursal
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Cormorant Garamond", serif',
                        color: "rgba(245,237,232,0.6)",
                        fontSize: "0.95rem",
                        fontWeight: 300,
                        lineHeight: 1.7,
                        maxWidth: 400,
                        mx: "auto",
                      }}
                    >
                      Te esperamos con los brazos abiertos para ofrecerte la mejor experiencia gastronómica
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;