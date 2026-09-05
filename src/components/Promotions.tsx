import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";

interface Promotion {
  id: number;
  title: string;
  description: string;
  tagLabel: string;
  tagColor: string;
  day: string;
  validUntil: string;
  featured?: boolean;
}

const promotions: Promotion[] = [
  {
    id: 1,
    title: "Jueves 2x1 en Sashimi",
    description:
      "Todos los jueves, disfruta de 2x1 en nuestra selección de Sashimi Deluxe. Válido en todas las sucursales.",
    tagLabel: "2x1",
    tagColor: "#8E2E3A",
    day: "Jueves",
    validUntil: "31 de marzo, 2026",
    featured: true,
  },
  {
    id: 4,
    title: "Combo Familiar Especial",
    description:
      "Veinte piezas de sushi variado, dos sopas miso y una bebida familiar. Precio especial para compartir.",
    tagLabel: "Familiar",
    tagColor: "#8E2E3A",
    day: "Fines de semana",
    validUntil: "20 de marzo, 2026",
    featured: true,
  },
  {
    id: 2,
    title: "10 Sushis + 1 Gratis",
    description:
      "En la compra de 10 unidades de sushi, llévate 1 adicional sin costo. Aplica para cualquier variedad.",
    tagLabel: "Oferta",
    tagColor: "#2C1810",
    day: "Todos los días",
    validUntil: "15 de febrero, 2026",
  },
  {
    id: 3,
    title: "Happy Hour de Sopa Miso",
    description:
      "De 3:00 a 6:00 de la tarde, la Sopa Miso tiene un 30% de descuento. Perfecta para media tarde.",
    tagLabel: "30%",
    tagColor: "#6B7A63",
    day: "Lunes a Viernes",
    validUntil: "28 de febrero, 2026",
  },
  {
    id: 5,
    title: "Lunes de Descuento",
    description:
      "Todos los lunes, 15% de descuento en todo el menú. Una buena forma de comenzar la semana.",
    tagLabel: "15%",
    tagColor: "#B98D46",
    day: "Lunes",
    validUntil: "31 de diciembre, 2026",
  },
  {
    id: 6,
    title: "Aniversario Especial",
    description:
      "Por nuestro aniversario, un postre de cortesía al ordenar cualquier plato principal.",
    tagLabel: "Evento",
    tagColor: "#4A4560",
    day: "10 de febrero",
    validUntil: "15 de febrero, 2026",
  },
];

const NigiriIllustration: React.FC = () => (
  <svg viewBox="0 0 240 200" width="100%" height="100%" role="img" aria-label="Nigiri de salmón">
    <defs>
      <radialGradient id="riceShade" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#FFFDF7" />
        <stop offset="60%" stopColor="#F2E9D8" />
        <stop offset="100%" stopColor="#DFCFAE" />
      </radialGradient>
      <linearGradient id="salmonShade" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F2A177" />
        <stop offset="45%" stopColor="#E07A50" />
        <stop offset="100%" stopColor="#B85338" />
      </linearGradient>
      <radialGradient id="shadowSpread" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(44,24,16,0.28)" />
        <stop offset="100%" stopColor="rgba(44,24,16,0)" />
      </radialGradient>
    </defs>

    <ellipse cx="120" cy="176" rx="78" ry="12" fill="url(#shadowSpread)" />

    <path
      d="M40 128 C40 96 74 78 120 78 C166 78 200 96 200 128 C200 150 166 162 120 162 C74 162 40 150 40 128Z"
      fill="url(#riceShade)"
    />
    <path
      d="M40 128 C40 96 74 78 120 78 C166 78 200 96 200 128"
      fill="none"
      stroke="#EDE0C6"
      strokeWidth="2"
      opacity="0.6"
    />

    {[
      [66, 118], [82, 134], [100, 112], [118, 140],
      [138, 116], [156, 132], [172, 108], [88, 148],
      [132, 150], [150, 146],
    ].map(([x, y], i) => (
      <ellipse key={i} cx={x} cy={y} rx="4.5" ry="3" fill="#FFFDF9" opacity="0.85" />
    ))}

    <path
      d="M46 110 C48 84 78 62 120 62 C162 62 192 84 194 110 C194 122 176 130 120 130 C64 130 46 122 46 110Z"
      fill="url(#salmonShade)"
    />
    <path
      d="M46 110 C48 84 78 62 120 62 C162 62 192 84 194 110"
      fill="none"
      stroke="#FBCBA9"
      strokeWidth="2.5"
      opacity="0.7"
    />
    <path
      d="M70 80 C90 70 150 70 170 80"
      fill="none"
      stroke="#8F4128"
      strokeWidth="1.5"
      opacity="0.45"
    />
    <path
      d="M62 96 C90 84 150 84 178 96"
      fill="none"
      stroke="#8F4128"
      strokeWidth="1.5"
      opacity="0.35"
    />

    <path
      d="M40 128 C40 140 74 150 120 150 C166 150 200 140 200 128 L200 118 C200 130 166 140 120 140 C74 140 40 130 40 118Z"
      fill="#1D1B16"
      opacity="0.88"
    />
  </svg>
);

const MakiIllustration: React.FC = () => (
  <svg viewBox="0 0 200 200" width="100%" height="100%" role="img" aria-label="Rollo maki">
    <defs>
      <radialGradient id="makiHighlight" cx="38%" cy="32%" r="70%">
        <stop offset="0%" stopColor="#3A3226" />
        <stop offset="100%" stopColor="#191510" />
      </radialGradient>
      <radialGradient id="riceRing" cx="42%" cy="36%" r="65%">
        <stop offset="0%" stopColor="#FFFDF7" />
        <stop offset="100%" stopColor="#E7D9BB" />
      </radialGradient>
      <radialGradient id="fillingShade" cx="40%" cy="35%" r="70%">
        <stop offset="0%" stopColor="#F0AE83" />
        <stop offset="55%" stopColor="#DD8A5A" />
        <stop offset="100%" stopColor="#B45D3F" />
      </radialGradient>
      <radialGradient id="shadowSpread2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(44,24,16,0.26)" />
        <stop offset="100%" stopColor="rgba(44,24,16,0)" />
      </radialGradient>
    </defs>

    <ellipse cx="100" cy="176" rx="66" ry="11" fill="url(#shadowSpread2)" />

    <circle cx="100" cy="100" r="76" fill="url(#makiHighlight)" />
    <circle cx="100" cy="100" r="60" fill="url(#riceRing)" />

    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i / 16) * Math.PI * 2;
      const r = 50 + (i % 3);
      const x = 100 + Math.cos(angle) * r;
      const y = 100 + Math.sin(angle) * r;
      return <circle key={i} cx={x} cy={y} r="2.6" fill="#FFFDF9" opacity="0.8" />;
    })}

    <circle cx="100" cy="100" r="30" fill="url(#fillingShade)" />
    <path d="M78 88 C90 80 112 80 124 90" fill="none" stroke="#8F4128" strokeWidth="2" opacity="0.4" />

    <path d="M84 96 C90 108 96 116 100 128" fill="none" stroke="#6B7A4A" strokeWidth="5" strokeLinecap="round" opacity="0.85" />
    <path d="M112 92 C116 104 118 112 116 124" fill="none" stroke="#C7452F" strokeWidth="5" strokeLinecap="round" opacity="0.85" />

    <circle cx="100" cy="100" r="76" fill="none" stroke="#0F0D09" strokeWidth="3" opacity="0.5" />
  </svg>
);

const featured = promotions.filter((p) => p.featured);
const rest = promotions.filter((p) => !p.featured);

const Promotions: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: "#F4EEE1",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(180deg, rgba(27,27,29,0.03) 0%, transparent 12%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4} alignItems="flex-end" sx={{ mb: { xs: 6, md: 9 } }}>
            <Grid item xs={12} md={7}>
              <Typography
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 600,
                  color: "#1B1B1D",
                  fontSize: { xs: "2.4rem", sm: "3.1rem", md: "3.6rem" },
                  lineHeight: 1.08,
                  letterSpacing: "0.01em",
                }}
              >
                Nuestras promociones 
                <br />
                <span style={{ color: "#C49A6C" }}>y ofertas especiales</span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  borderLeft: { xs: "none", md: "1px solid rgba(27,27,29,0.15)" },
                  pl: { xs: 0, md: 3 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    color: "rgba(27,27,29,0.62)",
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    fontWeight: 400,
                    lineHeight: 1.7,
                  }}
                >
                  Seis maneras de vivir la experiencia con un poco más de
                  ventaja. Cada oferta conserva la misma técnica, el mismo
                  producto, solo con mejor precio.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: { xs: 7, md: 10 } }}>
          {featured.map((promo, index) => (
            <Grid item xs={12} md={6} key={promo.id}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    height: "100%",
                    backgroundColor: "#1B1B1D",
                    borderRadius: "6px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      height: 200,
                      backgroundColor: "#211F1A",
                      backgroundImage:
                        "radial-gradient(circle at 30% 20%, rgba(185,141,70,0.14), transparent 60%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 3,
                    }}
                  >
                    <Box sx={{ width: 168, height: 152 }}>
                      {index === 0 ? <NigiriIllustration /> : <MakiIllustration />}
                    </Box>
                  </Box>

                  <Box sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1.2}
                      sx={{ mb: 1.5 }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: "#C79A56",
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: '"Cormorant Garamond", serif',
                          color: "#C79A56",
                          fontSize: "0.85rem",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {promo.tagLabel} · {promo.day}
                      </Typography>
                    </Stack>

                    <Typography
                      sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 600,
                        color: "#F4EEE1",
                        fontSize: "1.5rem",
                        mb: 1.2,
                      }}
                    >
                      {promo.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: '"Cormorant Garamond", serif',
                        color: "rgba(244,238,225,0.68)",
                        fontSize: "1.02rem",
                        fontWeight: 300,
                        lineHeight: 1.7,
                        flexGrow: 1,
                      }}
                    >
                      {promo.description}
                    </Typography>

                    <Divider sx={{ my: 2.5, borderColor: "rgba(244,238,225,0.14)" }} />

                    <Typography
                      sx={{
                        fontFamily: '"Cormorant Garamond", serif',
                        color: "rgba(244,238,225,0.4)",
                        fontSize: "0.78rem",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Vigente hasta el {promo.validUntil}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Divider sx={{ borderColor: "rgba(27,27,29,0.14)", mb: 1 }} />
          {rest.map((promo, i) => (
            <Box key={promo.id}>
              <Grid
                container
                spacing={2}
                alignItems="center"
                sx={{
                  py: 3.2,
                  transition: "opacity 0.2s ease",
                  "&:hover": { opacity: 0.72 },
                }}
              >
                <Grid item xs={12} sm={1.5}>
                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      color: promo.tagColor,
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {promo.tagLabel}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4.5}>
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 600,
                      color: "#1B1B1D",
                      fontSize: "1.15rem",
                    }}
                  >
                    {promo.title}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      color: "rgba(27,27,29,0.6)",
                      fontSize: "0.98rem",
                      fontWeight: 300,
                    }}
                  >
                    {promo.description}
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={1}>
                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      color: "rgba(27,27,29,0.45)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {promo.day}
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={1}>
                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      color: "rgba(27,27,29,0.35)",
                      fontSize: "0.75rem",
                      textAlign: { xs: "left", sm: "right" },
                    }}
                  >
                    {promo.validUntil}
                  </Typography>
                </Grid>
              </Grid>
              {i < rest.length - 1 && (
                <Divider sx={{ borderColor: "rgba(27,27,29,0.08)" }} />
              )}
            </Box>
          ))}
          <Divider sx={{ borderColor: "rgba(27,27,29,0.14)", mt: 1 }} />
        </motion.div>
      </Container>
    </Box>
  );
};

export default Promotions;