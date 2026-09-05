import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

import { theme } from "./theme/theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import MissionVision from "./components/MissionVision";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar />

      <Box id="inicio">
        <Hero />
      </Box>

      <Box id="menu">
        <Menu />
      </Box>

      <Box id="promociones">
        <Testimonials />
      </Box>

      <Box id="contact">
        <Contact />
      </Box>

      <Box id="nosotros">
        <MissionVision />
      </Box>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
