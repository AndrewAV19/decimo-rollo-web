import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Rating,
  Button,
  useMediaQuery,
  IconButton,
  Drawer,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  InputAdornment,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
  rating: number;
  category: string;
  available: boolean;
}

const allMenuItems: MenuItem[] = [
  {
    id: 1,
    name: "Sashimi Deluxe",
    description:
      "Selección premium de pescado fresco del día cortado por nuestros maestros sushi",
    price: "$45",
    image: "🍣",
    tag: "Popular",
    rating: 4.9,
    category: "Premium",
    available: true,
  },
  {
    id: 2,
    name: "Rolls Especiales",
    description:
      "Ocho rolls artesanales con ingredientes exclusivos y toques de autor",
    price: "$38",
    image: "🍱",
    tag: "Nuevo",
    rating: 4.8,
    category: "Especialidad",
    available: true,
  },
  {
    id: 3,
    name: "Temaki Premium",
    description:
      "Conos de alga nori rellenos con atún fresco y aguacate cremoso",
    price: "$32",
    image: "🌯",
    tag: "Recomendado",
    rating: 4.7,
    category: "Clásico",
    available: true,
  },
  {
    id: 4,
    name: "Sopa Miso",
    description: "Caldo tradicional japonés con tofu sedoso y algas wakame",
    price: "$18",
    image: "🥣",
    rating: 4.6,
    category: "Tradicional",
    available: true,
  },
  {
    id: 5,
    name: "Nigiri Variado",
    description:
      "Selección de 6 nigiris con diferentes pescados y mariscos",
    price: "$42",
    image: "🍙",
    tag: "Clásico",
    rating: 4.8,
    category: "Premium",
    available: true,
  },
  {
    id: 6,
    name: "Udon con Tempura",
    description: "Sopa de fideos gruesos con tempura de camarón y verduras",
    price: "$35",
    image: "🍜",
    rating: 4.5,
    category: "Tradicional",
    available: true,
  },
  {
    id: 7,
    name: "Gyozas de Cerdo",
    description: "Empanadillas japonesas rellenas de cerdo y verduras",
    price: "$22",
    image: "🥟",
    rating: 4.4,
    category: "Clásico",
    available: false,
  },
  {
    id: 8,
    name: "Ceviche Nikkei",
    description:
      "Fusión peruano-japonesa con pescado fresco y leche de tigre",
    price: "$28",
    image: "🐟",
    tag: "Especial",
    rating: 4.7,
    category: "Especialidad",
    available: true,
  },
  {
    id: 9,
    name: "Sushi Roll Rainbow",
    description: "Roll colorido con salmón, atún, camarón y aguacate",
    price: "$40",
    image: "🌈",
    rating: 4.9,
    category: "Especialidad",
    available: true,
  },
  {
    id: 10,
    name: "Edamame",
    description: "Vainas de soja hervidas con sal marina",
    price: "$12",
    image: "🫘",
    rating: 4.2,
    category: "Tradicional",
    available: true,
  },
  {
    id: 11,
    name: "Tempura Mixta",
    description: "Camarones y verduras empanizados y fritos",
    price: "$30",
    image: "🦐",
    rating: 4.6,
    category: "Clásico",
    available: true,
  },
  {
    id: 12,
    name: "Ramen Tonkotsu",
    description: "Caldo cremoso de cerdo con fideos, chashu y huevo marinado",
    price: "$38",
    image: "🍜",
    tag: "Popular",
    rating: 4.8,
    category: "Tradicional",
    available: true,
  },
];

const FullMenu: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 50]);
  const [showAvailable, setShowAvailable] = useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const filteredItems = allMenuItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      parseFloat(item.price.replace("$", "")) >= priceRange[0] &&
      parseFloat(item.price.replace("$", "")) <= priceRange[1];
    const matchesAvailability = !showAvailable || item.available;
    return matchesSearch && matchesPrice && matchesAvailability;
  });

  const filterContent = (
    <Box sx={{ p: { xs: 2, md: 0 } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            color: "#2C1810",
            fontSize: "1.2rem",
          }}
        >
          Filtros
        </Typography>
        {isMobile && (
          <IconButton onClick={() => setMobileFilterOpen(false)}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            color: "rgba(44,24,16,0.6)",
            fontSize: "0.85rem",
            mb: 1,
            fontWeight: 600,
          }}
        >
          Rango de Precio
        </Typography>
        <Slider
          value={priceRange}
          onChange={(_, newValue) => setPriceRange(newValue as number[])}
          valueLabelDisplay="auto"
          min={0}
          max={50}
          sx={{
            color: "#C49A6C",
            "& .MuiSlider-thumb": {
              "&:hover, &.Mui-focusVisible": {
                boxShadow: "0 0 0 8px rgba(196,154,108,0.16)",
              },
            },
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "0.8rem",
              color: "rgba(44,24,16,0.4)",
            }}
          >
            ${priceRange[0]}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "0.8rem",
              color: "rgba(44,24,16,0.4)",
            }}
          >
            ${priceRange[1]}
          </Typography>
        </Box>
      </Box>

      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={showAvailable}
              onChange={(e) => setShowAvailable(e.target.checked)}
              sx={{
                color: "rgba(196,154,108,0.3)",
                "&.Mui-checked": {
                  color: "#C49A6C",
                },
              }}
            />
          }
          label={
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: "0.9rem",
                color: "#2C1810",
              }}
            >
              Solo disponibles
            </Typography>
          }
        />
      </FormGroup>
    </Box>
  );

  return (
    <Box
      sx={{
        py: { xs: 6, md: 12 },
        backgroundColor: "#FDF9F6",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
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

      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
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
              Nuestro Menú
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
              Menú <span style={{ color: "#C49A6C" }}>Completo</span>
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
              Explora todas nuestras creaciones culinarias
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ mb: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <TextField
                placeholder="Buscar en el menú..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "rgba(44,24,16,0.3)" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    backgroundColor: "#FFFFFF",
                    "& fieldset": {
                      borderColor: "rgba(196,154,108,0.15)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(196,154,108,0.3)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#C49A6C",
                    },
                  },
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
              }}
            >
              {isMobile && (
                <Button
                  variant="outlined"
                  startIcon={<FilterListIcon />}
                  onClick={() => setMobileFilterOpen(true)}
                  sx={{
                    borderColor: "rgba(196,154,108,0.2)",
                    color: "#2C1810",
                    fontFamily: '"Cormorant Garamond", serif',
                    borderRadius: "12px",
                    "&:hover": {
                      borderColor: "#C49A6C",
                      backgroundColor: "rgba(196,154,108,0.04)",
                    },
                  }}
                >
                  Filtros
                </Button>
              )}
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <AnimatePresence mode="wait">
              <motion.div
                key={searchTerm}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {filteredItems.length === 0 ? (
                  <Box
                    sx={{
                      textAlign: "center",
                      py: 8,
                      backgroundColor: "#FFFFFF",
                      borderRadius: "24px",
                      border: "1px solid rgba(196,154,108,0.06)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Playfair Display", serif',
                        color: "#2C1810",
                        fontSize: "1.5rem",
                        mb: 1,
                      }}
                    >
                      😔
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Cormorant Garamond", serif',
                        color: "rgba(44,24,16,0.5)",
                        fontSize: "1.1rem",
                      }}
                    >
                      No encontramos resultados
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Cormorant Garamond", serif',
                        color: "rgba(44,24,16,0.3)",
                        fontSize: "0.9rem",
                        mt: 0.5,
                      }}
                    >
                      Prueba con otros filtros o busca otro plato
                    </Typography>
                  </Box>
                ) : (
                  <Grid container spacing={3}>
                    {filteredItems.map((item, index) => (
                      <Grid item xs={12} sm={6} lg={4} key={item.id}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          whileHover={{ y: -6 }}
                          style={{ height: "100%" }}
                        >
                          <Card
                            sx={{
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              borderRadius: "20px",
                              backgroundColor: "#FFFFFF",
                              boxShadow: "0 2px 16px rgba(44, 24, 16, 0.04)",
                              border: "1px solid rgba(196, 154, 108, 0.06)",
                              transition: "all 0.4s ease",
                              position: "relative",
                              overflow: "visible",
                              opacity: item.available ? 1 : 0.6,
                              "&:hover": {
                                boxShadow:
                                  "0 12px 40px rgba(196, 154, 108, 0.1)",
                                border: "1px solid rgba(196, 154, 108, 0.12)",
                              },
                            }}
                          >
                            {!item.available && (
                              <Box
                                sx={{
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                  backgroundColor: "rgba(44,24,16,0.8)",
                                  color: "#FFFFFF",
                                  padding: "8px 24px",
                                  borderRadius: "30px",
                                  fontFamily: '"Cormorant Garamond", serif',
                                  fontSize: "0.8rem",
                                  fontWeight: 600,
                                  letterSpacing: "0.1em",
                                  textTransform: "uppercase",
                                  zIndex: 5,
                                }}
                              >
                                Agotado
                              </Box>
                            )}

                            {item.tag && item.available && (
                              <Box
                                sx={{
                                  position: "absolute",
                                  top: 12,
                                  right: 12,
                                  zIndex: 2,
                                }}
                              >
                                <Chip
                                  label={item.tag}
                                  size="small"
                                  sx={{
                                    backgroundColor:
                                      item.tag === "Popular"
                                        ? "#C49A6C"
                                        : "#2C1810",
                                    color: "#FFFFFF",
                                    fontSize: "0.55rem",
                                    letterSpacing: "0.15em",
                                    fontWeight: 400,
                                    fontFamily: '"Cormorant Garamond", serif',
                                    textTransform: "uppercase",
                                    height: 22,
                                  }}
                                />
                              </Box>
                            )}

                            <Box
                              sx={{
                                height: { xs: 140, sm: 160 },
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: { xs: "3.5rem", sm: "4.5rem" },
                                background:
                                  "linear-gradient(160deg, #FAF6F2 0%, #F0EAE4 100%)",
                                borderTopLeftRadius: "20px",
                                borderTopRightRadius: "20px",
                                position: "relative",
                                "&::after": {
                                  content: '""',
                                  position: "absolute",
                                  bottom: 0,
                                  left: "20%",
                                  right: "20%",
                                  height: 1,
                                  background:
                                    "linear-gradient(90deg, transparent, rgba(196,154,108,0.15), transparent)",
                                },
                              }}
                            >
                              <motion.span
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.4 }}
                                style={{ display: "inline-block" }}
                              >
                                {item.image}
                              </motion.span>
                            </Box>

                            <CardContent
                              sx={{
                                p: { xs: 2, sm: 2.5 },
                                flexGrow: 1,
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "flex-start",
                                  mb: 0.5,
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontFamily: '"Playfair Display", serif',
                                    fontWeight: 700,
                                    color: "#2C1810",
                                    fontSize: { xs: "0.95rem", sm: "1.05rem" },
                                    letterSpacing: "0.02em",
                                  }}
                                >
                                  {item.name}
                                </Typography>
                                <Typography
                                  sx={{
                                    fontFamily: '"Cormorant Garamond", serif',
                                    fontWeight: 600,
                                    color: "#C49A6C",
                                    fontSize: { xs: "1rem", sm: "1.1rem" },
                                    ml: 1,
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {item.price}
                                </Typography>
                              </Box>

                              <Typography
                                sx={{
                                  fontFamily: '"Cormorant Garamond", serif',
                                  color: "rgba(44, 24, 16, 0.5)",
                                  fontSize: "0.8rem",
                                  fontWeight: 300,
                                  lineHeight: 1.5,
                                  mb: 2,
                                  flexGrow: 1,
                                }}
                              >
                                {item.description}
                              </Typography>

                              <Divider
                                sx={{
                                  borderColor: "rgba(196,154,108,0.06)",
                                  mb: 1.5,
                                }}
                              />

                              <Stack
                                direction="row"
                                spacing={1.5}
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <Stack
                                  direction="row"
                                  spacing={0.5}
                                  alignItems="center"
                                >
                                  <Rating
                                    value={item.rating}
                                    readOnly
                                    precision={0.1}
                                    size="small"
                                    icon={
                                      <StarIcon
                                        sx={{ fontSize: 14, color: "#C49A6C" }}
                                      />
                                    }
                                    emptyIcon={
                                      <StarIcon
                                        sx={{
                                          fontSize: 14,
                                          color: "rgba(196,154,108,0.15)",
                                        }}
                                      />
                                    }
                                  />
                                  <Typography
                                    sx={{
                                      fontFamily: '"Cormorant Garamond", serif',
                                      color: "rgba(44,24,16,0.3)",
                                      fontSize: "0.6rem",
                                    }}
                                  >
                                    {item.rating}
                                  </Typography>
                                </Stack>

                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                  }}
                                >
                                  <Box
                                    sx={{
                                      color: "rgba(44,24,16,0.2)",
                                      fontSize: "0.55rem",
                                      letterSpacing: "0.1em",
                                      textTransform: "uppercase",
                                      fontFamily: '"Cormorant Garamond", serif',
                                      mr: 0.5,
                                    }}
                                  >
                                    <LocalDiningIcon sx={{ fontSize: 12 }} />
                                  </Box>
                                  <Typography
                                    sx={{
                                      fontFamily: '"Cormorant Garamond", serif',
                                      color: "rgba(44,24,16,0.3)",
                                      fontSize: "0.6rem",
                                    }}
                                  >
                                    {item.category}
                                  </Typography>
                                </Box>
                              </Stack>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </motion.div>
            </AnimatePresence>

          </Grid>
        </Grid>
      </Container>

      <Drawer
        anchor="bottom"
        open={mobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: "24px 24px 0 0",
            padding: 3,
            maxHeight: "80vh",
          },
        }}
      >
        {filterContent}
        <Button
          fullWidth
          variant="contained"
          onClick={() => setMobileFilterOpen(false)}
          sx={{
            backgroundColor: "#C49A6C",
            color: "#FFFFFF",
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "0.9rem",
            fontWeight: 600,
            textTransform: "none",
            borderRadius: "12px",
            padding: "12px",
            mt: 2,
            "&:hover": {
              backgroundColor: "#D4B08C",
            },
          }}
        >
          Aplicar filtros
        </Button>
      </Drawer>
    </Box>
  );
};

export default FullMenu;