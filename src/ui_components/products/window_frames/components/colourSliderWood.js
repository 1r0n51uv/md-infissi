import React, {Component} from 'react';
import AliceCarousel from "react-alice-carousel";
import ColourSliderElements from "./colourSliderElements";

class ColourSliderWood extends Component {
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


            <div style={{marginTop: '5%'}} className="col-md-12 col-sm-12 col-xs-12 text-center">

                <AliceCarousel
                    buttonsDisabled={true}
                    infinite={true}
                    autoPlay={true}
                    responsive={this.state.responsive}
                    mouseDragEnabled={true}
                    autoPlayInterval={2000}
                    autoPlayDirection="rtl"
                >

                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2Fwood%2FC%20510%20CILIEGIO%20ROSSO.PNG?alt=media&token=48c002fc-089e-4275-b6f3-e7c5018fc4d1"
                    />

                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2Fwood%2FN%20532%20CILIEGIO%20REALE.PNG?alt=media&token=5a5ddd0d-4a69-481f-9ea8-d7949ac3f917"
                    />

                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2Fwood%2FN%20630%20ACACIA.PNG?alt=media&token=ba53b0a3-8144-4a58-8af1-9af17b3ddda1"
                    />

                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2Fwood%2FN%20632%20NOCE%20REALE.PNG?alt=media&token=ff466573-0444-46db-a5b5-9600e4a5c91b"
                    />
                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2Fwood%2FN06S%20NOCE%20SCURO%20OPACO.PNG?alt=media&token=359e7c1e-b1eb-426a-bf54-4cebb2052710"
                    />
                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2Fwood%2FNH31%20NOCE%20CHIARO.PNG?alt=media&token=db9a09cc-87c7-46c4-8e85-a8d65e924bfe"
                    />
                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2Fwood%2FR%20811%20RENOLIT%20SCURO.PNG?alt=media&token=ac64e606-722a-467a-87a4-4832626a52bd"
                    />

                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2Fwood%2FR800%20RENOLIT%20BIANCO.PNG?alt=media&token=1f461e7c-4258-480e-9db8-fde8a7fc8e52"
                    />
                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2Fwood%2FR809%20RENOLIT%20ORO.PNG?alt=media&token=c26d8378-7e09-4a6d-a9cf-f2a8b98e7624"
                    />
                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2Fwood%2FWH30%20WHITE.PNG?alt=media&token=89de2092-e670-449b-a263-e354601de30b"
                    />


                </AliceCarousel>



            </div>

        );
    }


}

export default ColourSliderWood;
