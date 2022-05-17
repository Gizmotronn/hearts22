import React, { useState } from 'react';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import { useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { light } from './styles/Themes';
import Home from "./components/sections/Home.js";
import Roadmap from "./components/sections/Roadmap.js";
import Footer from './components/sections/Footer';
import styled from "styled-components";
import RoadmapPartTwo from "./components/sections/Roadmap/RoadmapPartTwo";
import Testimonials from './components/Testimonials';
import Two from './components/sections/About/Two';

const Box = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    document.title = "Melbourne City Tribute";  
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Home />
        <Box>
          <Roadmap />
        </Box>
      </ThemeProvider>
      <div className="App">
        <Title/>
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
      <ThemeProvider theme={light}>
        <Box>
          <RoadmapPartTwo />
        </Box>
        <Box>
          <Two />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
