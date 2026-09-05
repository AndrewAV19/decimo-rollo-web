import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { theme } from "./theme/theme";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Promotions from "./components/Promotions";
import FullMenu from "./components/FullMenu";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Box id="inicio">
                  <Hero />
                </Box>

                <Box id="menu">
                  <Menu />
                </Box>

                <Box id="promociones">
                  <Promotions />
                </Box>

                <Box id="testimonials">
                  <Testimonials />
                </Box>

                <Box id="contact">
                  <Contact />
                </Box>

              </>
            }
          />

          <Route path="/menu-completo" element={<FullMenu />} />
        </Routes>

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
