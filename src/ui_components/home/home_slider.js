import React, {Component} from 'react';
import {Carousel} from "react-responsive-carousel";
import slider1 from '../../res/infissi1.jpg'
import slider2 from '../../res/infissi2.jpg'
import slider3 from '../../res/6370.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";


class HomeSlider extends Component {
    render() {
        return (

            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                dynamicHeight={true}
                interval={4000}
                showArrows={true}
                >

                <div>
                    <img src={slider1} className="img-responsive" alt=""/>
                </div>


                <div>
                    <img src={slider2} className="img-responsive" alt=""/>
                </div>


                <div>
                    <img src={slider3} className="img-responsive" alt=""/>
                </div>
            </Carousel>
        );
    }
}

export default HomeSlider;
