import React from 'react';
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import "./slider.css";

const slideImages = [
    '/images/action1.png',
    '/images/action2.png',
    '/images/action3.png',
  ];
  
  const Slideshow = () => {
      return (
        <div>
          <Slide easing="ease">
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
               
              </div>
            </div>
          </Slide>
        </div>
      )
  };
  
  export default Slideshow;