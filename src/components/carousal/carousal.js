import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../images/carousal1.jpg';
import img2 from '../images/crausal2.jpg';
import img3 from '../images/carousal3.jpg';
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2}  />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
export default DemoCarousel