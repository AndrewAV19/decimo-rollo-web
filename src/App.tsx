
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import MissionVision from './components/MissionVision';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Menu />
      <Testimonials />
      <MissionVision />
      <Footer />
     
    </ThemeProvider>
  );
}

export default App;