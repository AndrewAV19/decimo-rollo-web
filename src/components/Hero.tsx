import React from "react";
import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";

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
              initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 300, sm: 380, md: 450, lg: 520 },
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: { xs: "90%", sm: "85%", md: "80%" },
                    height: { xs: "90%", sm: "85%", md: "80%" },
                    background:
                      "radial-gradient(circle at 30% 40%, rgba(196, 154, 108, 0.15) 0%, transparent 70%)",
                    borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%",
                    animation: "float 10s ease-in-out infinite",
                    "@keyframes float": {
                      "0%, 100%": {
                        transform: "translateY(0px) rotate(0deg)",
                      },
                      "50%": {
                        transform: "translateY(-20px) rotate(2deg)",
                      },
                    },
                  }}
                />

                <Box
                  sx={{
                    width: { xs: "85%", sm: "80%", md: "75%" },
                    height: { xs: "85%", sm: "80%", md: "75%" },
                    background:
                      "linear-gradient(145deg, rgba(196, 154, 108, 0.1) 0%, rgba(180, 130, 80, 0.05) 100%)",
                    borderRadius: "50% 50% 40% 60% / 60% 40% 50% 50%",
                    border: "1px solid rgba(196, 154, 108, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: {
                        xs: "6rem",
                        sm: "8rem",
                        md: "10rem",
                        lg: "12rem",
                      },
                      opacity: 0.15,
                      position: "absolute",
                      transform: "rotate(-10deg)",
                    }}
                  >
                    🍣
                  </Box>

                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "4rem", sm: "5rem", md: "6rem" },
                      opacity: 0.9,
                      filter:
                        "drop-shadow(0 8px 30px rgba(196, 154, 108, 0.2))",
                      animation: "bob 4s ease-in-out infinite",
                      "@keyframes bob": {
                        "0%, 100%": { transform: "translateY(0px)" },
                        "50%": { transform: "translateY(-10px)" },
                      },
                    }}
                  >
                    🍱
                  </Box>

                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                      opacity: 0.6,
                      position: "absolute",
                      bottom: { xs: "10%", sm: "15%" },
                      right: { xs: "10%", sm: "15%" },
                      animation: "bob 5s ease-in-out infinite 1s",
                      filter:
                        "drop-shadow(0 4px 20px rgba(196, 154, 108, 0.15))",
                    }}
                  >
                    🥢
                  </Box>

                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                      opacity: 0.4,
                      position: "absolute",
                      top: { xs: "15%", sm: "20%" },
                      left: { xs: "10%", sm: "15%" },
                      animation: "bob 6s ease-in-out infinite 2s",
                    }}
                  >
                    ✧
                  </Box>
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
