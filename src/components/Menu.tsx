import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";

const menuItems = [
  {
    name: "Sashimi Deluxe",
    description: "Selección premium de pescado fresco del día",
    price: "$45",
    image: "🍣",
    tag: "Popular",
  },
  {
    name: "Rolls Especiales",
    description: "Combinación de 8 rolls con ingredientes exclusivos",
    price: "$38",
    image: "🍱",
    tag: "Nuevo",
  },
  {
    name: "Temaki Premium",
    description: "Conos de alga rellenos con atún y aguacate",
    price: "$32",
    image: "🌯",
    tag: "Recomendado",
  },
  {
    name: "Sopa Miso",
    description: "Caldo tradicional con tofu y algas",
    price: "$18",
    image: "🥣",
  },
];

const Menu: React.FC = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "background.default" }}>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "secondary.main",
              letterSpacing: "0.3em",
              display: "block",
              textAlign: "center",
            }}
          >
            Nuestro Menú
          </Typography>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 6,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Experiencias Gastronómicas
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {menuItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={item.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 200,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "5rem",
                      background:
                        "linear-gradient(135deg, #faf8f5 0%, #f0ebe4 100%)",
                    }}
                  >
                    {item.image}
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 1,
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {item.name}
                      </Typography>
                      <Typography variant="h6" color="secondary.main">
                        {item.price}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {item.description}
                    </Typography>
                    {item.tag && (
                      <Chip
                        label={item.tag}
                        size="small"
                        sx={{
                          backgroundColor: "secondary.main",
                          color: "white",
                          fontSize: "0.7rem",
                          letterSpacing: "0.1em",
                        }}
                      />
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Menu;
