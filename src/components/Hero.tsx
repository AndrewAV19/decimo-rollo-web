import React from "react";
import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";

const PickingNigiri: React.FC = () => {
  const timing = {
    duration: 3.6,
    times: [0, 0.32, 0.5, 0.78, 1],
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  return (
    <svg
      viewBox="0 0 320 320"
      width="100%"
      height="100%"
      role="img"
      aria-label="Palillos tomando un nigiri"
    >
      <defs>
        <radialGradient id="plateShade" cx="45%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#2A241C" />
          <stop offset="100%" stopColor="#161310" />
        </radialGradient>
        <radialGradient id="riceShadeHero" cx="35%" cy="28%" r="75%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="60%" stopColor="#EFE3C8" />
          <stop offset="100%" stopColor="#D8C4A0" />
        </radialGradient>
        <linearGradient
          id="salmonShadeHero"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#F2A177" />
          <stop offset="45%" stopColor="#E07A50" />
          <stop offset="100%" stopColor="#B85338" />
        </linearGradient>
        <linearGradient id="chopstickShade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D9B36C" />
          <stop offset="100%" stopColor="#8F6B36" />
        </linearGradient>
        <radialGradient id="plateShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.4)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>

      <ellipse cx="160" cy="248" rx="118" ry="16" fill="url(#plateShadow)" />
      <ellipse cx="160" cy="230" rx="132" ry="34" fill="url(#plateShade)" />
      <ellipse
        cx="160"
        cy="226"
        rx="132"
        ry="34"
        fill="none"
        stroke="#C79A56"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <ellipse
        cx="160"
        cy="226"
        rx="94"
        ry="22"
        fill="none"
        stroke="#C79A56"
        strokeOpacity="0.18"
        strokeWidth="1"
      />

      <circle cx="228" cy="212" r="6" fill="#7C8B54" opacity="0.7" />
      <circle cx="242" cy="220" r="4.5" fill="#B85338" opacity="0.6" />

      <motion.g animate={{ y: [0, 0, 0, -22, 0] }} transition={timing}>
        <path
          d="M92 214 C92 192 118 178 154 178 C190 178 216 192 216 214 C216 230 190 240 154 240 C118 240 92 230 92 214Z"
          fill="url(#riceShadeHero)"
        />
        {[
          [112, 206],
          [128, 220],
          [144, 200],
          [160, 224],
          [176, 204],
          [192, 218],
          [120, 230],
          [168, 232],
        ].map(([x, y], i) => (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="3.6"
            ry="2.4"
            fill="#FFFDF9"
            opacity="0.85"
          />
        ))}
        <path
          d="M98 198 C100 178 124 162 154 162 C184 162 208 178 210 198 C210 208 194 214 154 214 C114 214 98 208 98 198Z"
          fill="url(#salmonShadeHero)"
        />
        <path
          d="M118 174 C134 168 174 168 190 174"
          fill="none"
          stroke="#8F4128"
          strokeWidth="1.3"
          opacity="0.4"
        />
        <path
          d="M92 214 C92 224 118 232 154 232 C190 232 216 224 216 214 L216 206 C216 216 190 224 154 224 C118 224 92 216 92 206Z"
          fill="#1D1B16"
          opacity="0.9"
        />
      </motion.g>

      <motion.g
        animate={{ y: [-46, -46, -8, -30, -46], rotate: [-4, -4, 0, -2, -4] }}
        transition={timing}
        style={{ transformOrigin: "154px 214px" }}
      >
        <motion.rect
          x="150.5"
          y="70"
          width="5"
          height="130"
          rx="2.5"
          fill="url(#chopstickShade)"
          animate={{ rotate: [-9, -9, -5.5, -5.5, -9] }}
          transition={timing}
          style={{ transformOrigin: "153px 200px" }}
        />
        <motion.rect
          x="164.5"
          y="70"
          width="5"
          height="130"
          rx="2.5"
          fill="url(#chopstickShade)"
          animate={{ rotate: [9, 9, 5.5, 5.5, 9] }}
          transition={timing}
          style={{ transformOrigin: "167px 200px" }}
        />
      </motion.g>
    </svg>
  );
};

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 10, md: 0 },
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(196, 154, 108, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 80%, rgba(196, 154, 108, 0.05) 0%, transparent 50%),
          linear-gradient(180deg, #0D0D0D 0%, #1A1410 40%, #241D18 100%)
        `,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-30%",
          right: "-20%",
          width: "70%",
          height: "90%",
          background:
            "radial-gradient(circle, rgba(196, 154, 108, 0.12) 0%, transparent 65%)",
          borderRadius: "50%",
          animation: "pulse 8s ease-in-out infinite",
          "@keyframes pulse": {
            "0%, 100%": { transform: "scale(1)", opacity: 0.8 },
            "50%": { transform: "scale(1.2)", opacity: 1 },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: "50%",
          height: "60%",
          background:
            "radial-gradient(circle, rgba(180, 130, 80, 0.06) 0%, transparent 60%)",
          borderRadius: "50%",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Box sx={{ position: "relative" }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "#C49A6C",
                    letterSpacing: "0.4em",
                    fontSize: { xs: "0.7rem", sm: "0.85rem" },
                    fontWeight: 300,
                    fontFamily: '"Cormorant Garamond", serif',
                    display: "inline-block",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      bottom: -4,
                      left: 0,
                      width: 40,
                      height: 2,
                      backgroundColor: "#C49A6C",
                      opacity: 0.4,
                    },
                  }}
                >
                  Bienvenido a
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: '"Playfair Display", "Georgia", serif',
                    fontWeight: 700,
                    color: "#F5EDE8",
                    fontSize: {
                      xs: "2.8rem",
                      sm: "3.8rem",
                      md: "5rem",
                      lg: "5.5rem",
                    },
                    lineHeight: 1.08,
                    letterSpacing: "0.02em",
                    mt: 2,
                    mb: 2,
                    textShadow: "0 2px 40px rgba(0,0,0,0.3)",
                    "& span": {
                      color: "#C49A6C",
                    },
                  }}
                >
                  DÉCIMO <span>ROLLO</span>
                </Typography>

                <Box
                  sx={{
                    width: 80,
                    height: 3,
                    backgroundColor: "rgba(196, 154, 108, 0.3)",
                    mb: 3,
                    borderRadius: 2,
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: { xs: "1rem", sm: "1.15rem", md: "1.3rem" },
                    color: "rgba(245, 237, 232, 0.7)",
                    fontWeight: 300,
                    maxWidth: 520,
                    lineHeight: 1.8,
                    letterSpacing: "0.02em",
                    mb: 4,
                  }}
                >
                  Una experiencia culinaria única donde la tradición japonesa se
                  encuentra con la elegancia moderna. <br />
                  <Box
                    component="span"
                    sx={{ color: "#C49A6C", fontWeight: 400 }}
                  >
                    Descubre el arte del sushi.
                  </Box>
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ flexWrap: "wrap" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      href="#menu"
                      sx={{
                        backgroundColor: "#C49A6C",
                        color: "#0D0D0D",
                        fontSize: "0.9rem",
                        fontWeight: 400,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        padding: "14px 40px",
                        borderRadius: "50px",
                        fontFamily: '"Cormorant Garamond", serif',
                        boxShadow: "0 8px 35px rgba(196, 154, 108, 0.3)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#D4B08C",
                          boxShadow: "0 12px 45px rgba(196, 154, 108, 0.45)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      Ver Menú
                    </Button>
                  </motion.div>
                </Stack>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 320, sm: 400, md: 460, lg: 520 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: { xs: 280, sm: 340, md: 400 },
                    height: { xs: 280, sm: 340, md: 400 },
                  }}
                >
                  <PickingNigiri />
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
