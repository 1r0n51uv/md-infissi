import React, {Component} from 'react';
import {Carousel} from "react-responsive-carousel";

class PergolaSlider extends Component {
    render() {
        return (
            <div>
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
                        <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FpergolaClimatica%2Fmed-varia-03.jpg?alt=media&token=afe4cb15-f144-4fe5-986c-906b5bc45120" className="img-responsive" alt=""/>
                    </div>


                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FpergolaClimatica%2Fmed-varia-05.jpg?alt=media&token=e36ecefd-3a8b-43c5-84dd-3da5f2e9ccc4" className="img-responsive" alt=""/>
                    </div>


                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FpergolaClimatica%2Fmed-varia-06.jpg?alt=media&token=3cadc26d-0aae-4be1-975a-e071176b3478" className="img-responsive" alt=""/>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default PergolaSlider;
