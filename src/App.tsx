
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Menu />
     
    </ThemeProvider>
  );
}

export default App;