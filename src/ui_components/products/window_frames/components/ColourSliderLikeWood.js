import React, {Component} from 'react';
import AliceCarousel from "react-alice-carousel";
import ColourSliderElements from "./colourSliderElements";

class ColourSliderLikeWood extends Component {
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
                    autoPlayInterval={2000}>

                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteALLEG%2FCOLORI%20PARTE%20IN%20LEGNO%2FACERO-NATURALE-20.png?alt=media&token=af301e8f-24bc-41ec-b746-cc1fa356d065"
                    />
                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteALLEG%2FCOLORI%20PARTE%20IN%20LEGNO%2FFRASSINO-BIANCO-15.jpg?alt=media&token=d6e1fe51-27d7-42d2-b59a-7e79c156e882"
                    />
                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteALLEG%2FCOLORI%20PARTE%20IN%20LEGNO%2FFRASSINO-BIANCO-COPERTO.jpg?alt=media&token=1703cdec-1af1-4c62-9661-c7465dfc81c5"
                    />
                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteALLEG%2FCOLORI%20PARTE%20IN%20LEGNO%2FFRASSINO-CILIEGIO-12.jpg?alt=media&token=cf9ae959-c998-4bc9-936a-a871f8776223"
                    />
                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteALLEG%2FCOLORI%20PARTE%20IN%20LEGNO%2FFRASSINO-NOCE-11.jpg?alt=media&token=656b9b03-d2a0-490c-a5df-0e440d1a6e9a"
                    />
                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteALLEG%2FCOLORI%20PARTE%20IN%20LEGNO%2FLACCATO-BIANCO.jpg?alt=media&token=d08cbf48-3936-485c-b2bd-6f3435fe6968"
                    />
                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteALLEG%2FCOLORI%20PARTE%20IN%20LEGNO%2FMOGANO-NATURALE-7M.jpg?alt=media&token=9223acff-3262-4c6b-9464-67a8462e6aa3"
                    />
                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteALLEG%2FCOLORI%20PARTE%20IN%20LEGNO%2FROVERE-NATUALE-02.jpg?alt=media&token=7500ed62-492c-4d4e-9f60-4f18d497c806"
                    />
                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteALLEG%2FCOLORI%20PARTE%20IN%20LEGNO%2FROVERE-SBIANCATO-27.jpg?alt=media&token=c70334ee-1d69-4a0d-972c-c8f42ec9cfd3"
                    />
                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteALLEG%2FCOLORI%20PARTE%20IN%20LEGNO%2FROVERE-T-NOCE-06.jpg?alt=media&token=a685bc11-04b5-4cca-8e3a-26a107faf284"
                    />
                    <ColourSliderElements
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteALLEG%2FCOLORI%20PARTE%20IN%20LEGNO%2FROVERE-WENGE-25.jpg?alt=media&token=ececeb2b-f56d-4c78-9a7e-65c53eeab1c4"
                    />


                </AliceCarousel>



            </div>
        );
    }
}

export default ColourSliderLikeWood;
