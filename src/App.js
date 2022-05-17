import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { light } from "./styles/Themes";
import { useEffect } from 'react';

import Navigation from "./components/Navigation";

import Home from "./components/sections/Home.js";
import About from "./components/sections/About";
import Roadmap from "./components/sections/Roadmap";
import Showcase from "./components/sections/Showcase";
import Team from "./components/sections/Team";
import Faq from "./components/sections/Faq";
import Footer from "./components/sections/Footer";

function App() {
  useEffect(() => {
    document.title = "Melbourne City 21/22 Tribute";  
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
