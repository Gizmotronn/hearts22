import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import image1 from "../../../assets/Fans/1.jpeg";
import image2 from "../../../assets/Fans/2.jpeg";

const slideImages = [
    {
      url: '../../assets/Fans/1.jpeg',
      caption: 'Slide 1'
    },
    {
        url: {image2},
      caption: 'Slide 2'
    },
];
  
const Slideshow = () => {
      return (
        <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div className="each-slide" key={index}>
                <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                  <span>{slideImage.caption}</span>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      )
}

export default Slideshow;