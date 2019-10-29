import React, {Component} from 'react';
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css'
import SinglePanelDoorSlider from "./singlePanelDoorSlider";

class DoorSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responsive: {
                0: {
                    items: 3
                },
                1024: {
                    items: 5
                }
            },
            open: false,
            img: ''
        }
    }

    render() {
        return (

            <div style={{marginBottom: '15%'}}>

                <div className="container">

                    <div className="col-md-12 col-sm-12 col-xs-12" >

                        <div className="tittle wow fadeInUp">
                            <h2>I pannelli <br/>
                                Scegli il tuo stile preferito
                            </h2>

                        </div>

                    </div>

                </div>
                <div style={{marginTop: '5%'}} className="col-md-12 col-sm-12 col-xs-12 text-center">

                    <AliceCarousel
                        buttonsDisabled={true}
                        infinite={true}
                        responsive={this.state.responsive}
                        mouseDragEnabled={true}
                    >

                        <SinglePanelDoorSlider
                            code={0}
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/doorSlider%2F117-M-449x1030.jpg?alt=media&token=a6278bef-6c4e-4801-a179-12c3389f7351"/>

                        <SinglePanelDoorSlider
                            code={1}
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/doorSlider%2F125-M-449x1030.jpg?alt=media&token=aecc5cdb-1da6-4389-bc17-71da35b336e6"
                        />

                        <SinglePanelDoorSlider
                            code={2}
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/doorSlider%2F131-E-449x1030.jpg?alt=media&token=8398c909-0abf-4753-b936-c0872fddcc45"
                        />

                        <SinglePanelDoorSlider
                            code={3}
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/doorSlider%2F171B-E-449x1030.jpg?alt=media&token=79befbca-1352-42af-b0fc-8fb053a2aa5b"
                        />

                        <SinglePanelDoorSlider
                            code={4}
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/doorSlider%2F23-P-449x1030.jpg?alt=media&token=29a1b703-bf00-4332-9745-da5c1f06b8b6"
                        />

                        <SinglePanelDoorSlider
                            code={5}
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/doorSlider%2F30B-P-449x1030.jpg?alt=media&token=1d42f4f1-2527-43e5-8ad8-c081a76909c6"
                        />

                        <SinglePanelDoorSlider
                            code={6}
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/doorSlider%2F31-EM-449x1030.jpg?alt=media&token=476c5eee-5b71-440e-a020-a673e02723f1"
                        />

                        <SinglePanelDoorSlider
                            code={7}
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/doorSlider%2F56-P-449x1030.jpg?alt=media&token=abb1d342-2840-4fa2-818b-31e894cba143"
                        />

                        <SinglePanelDoorSlider
                            code={8}
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/doorSlider%2FLK90-MD-449x1030.jpg?alt=media&token=761a44df-aa55-4987-9baf-bc1f7b637207"
                        />

                        <SinglePanelDoorSlider
                            code={9}
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/doorSlider%2Fnoce-nazionale-449x1030.jpg?alt=media&token=65127b04-1ceb-46c7-ae2c-b8b925ccd305"
                        />



                    </AliceCarousel>



                </div>

            </div>

        );
    }
}

export default DoorSlider;
