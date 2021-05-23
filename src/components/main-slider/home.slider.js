import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slider.css';

const FadeExample = () => {
  const fadeImages = [
    "/images/action1.png",
    "/images/action2.png",
    "/images/action3.png"
  ];

  return (
    <div>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} />
            </div>
            {/* <p>First Slide</p> */}
          </div>
          <div className="each-fade">
            {/* <p>Second Slide</p> */}
            <div>
              <img src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} />
            </div>
            {/* <p>Third Slide</p> */}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default FadeExample;