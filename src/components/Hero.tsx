import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 8, md: 0 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "60%",
          height: "80%",
          background:
            "radial-gradient(circle, rgba(212,165,116,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "secondary.main",
                  letterSpacing: "0.3em",
                  fontSize: "1rem",
                }}
              >
                Bienvenido a
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  color: "white",
                  fontSize: { xs: "3rem", md: "5rem" },
                  mb: 2,
                  mt: 1,
                }}
              >
                SAKURA
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.2rem",
                  maxWidth: 500,
                  mb: 4,
                }}
              >
                Una experiencia culinaria única donde la tradición japonesa se
                encuentra con la elegancia moderna.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "secondary.main",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "secondary.dark",
                    },
                  }}
                >
                  Ver Menú
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "secondary.main",
                    color: "secondary.main",
                    "&:hover": {
                      borderColor: "secondary.dark",
                      backgroundColor: "rgba(212,165,116,0.1)",
                    },
                  }}
                >
                  Reservar
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: 400,
                  background:
                    "linear-gradient(135deg, #d4a574 0%, #b8895e 100%)",
                  borderRadius: "50% 50% 0 50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  "&::after": {
                    content: '"🍣"',
                    fontSize: "8rem",
                    opacity: 0.3,
                  },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
