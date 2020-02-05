import React, {Component} from 'react';
import AliceCarousel from "react-alice-carousel";

import firebase from "firebase";
import ColourCard from "../window_frames/components/colourCard";

class PanelSlider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            responsive: {
                0: {
                    items: 5
                },
                1024: {
                    items: 8
                }
            },
            open: false,
            img: '',
            panels: []

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
                    autoPlayDirection="rtl">

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F113-M-MASSELLO.jpg?alt=media&token=1419c7dc-499d-45d3-9228-23d40a01988c"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F120-M-MASSELLO.jpg?alt=media&token=8ec7bb7c-b318-411a-885d-0743f1a11525"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F130B-M-MASSELLO.jpg?alt=media&token=1255f338-8afe-4e84-913e-b2f63356bd28"
                    />
                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F131-E-PANTOGRAFATI%20ELITE.jpg?alt=media&token=80ae11f9-b9bb-456e-a00f-7cf7e146b23d"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F164-E-PANTOGRAFATI%20ELITE.jpg?alt=media&token=3b98fda4-ed84-4b90-82de-6c3bbe70f5e7"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F165-E-PANTOGRAFATI%20ELITE.jpg?alt=media&token=87b1088f-1664-4ff8-ae78-d84a74f6e6f6"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F181-E-PANTOGRAFATI%20ELITE.jpg?alt=media&token=69194307-787e-4c21-a9a4-d24d3459fdc4"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F21-P-PANTOGRAFATI%20BASIC.jpg?alt=media&token=4cc0d0cf-ea52-419d-898e-2192f739a067"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F35-M-MASSELLO.jpg?alt=media&token=412d5271-786a-4e0b-8846-65b53f2898ed"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F4-P-PANTOGRAFATI%20BASIC.jpg?alt=media&token=9c25a986-4cb3-4222-8d6e-d9dbb3dfe44d"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F503-AL-%20ALLUMINIO.jpg?alt=media&token=7444a674-15ac-4477-997b-0e855fc200ff"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F504-AL-ALLUMINIO.jpg?alt=media&token=1f44d744-9224-46ed-a578-30e016e71855"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F505-AL-ALLUMINIO.jpg?alt=media&token=c5f18445-fab6-4b56-a01a-48f5ebe8acc6"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F82T-P-PANTOGRAFATI%20BASIC.jpg?alt=media&token=386279a5-0363-449a-9bef-aecf06db9230"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2FLG18-MD-%20LISCIO.jpg?alt=media&token=ae0f3371-ab08-4478-8d5a-a630800b9102"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2FLG69-MD-%20LISCIO.jpg?alt=media&token=fe5bcd7c-45cf-4bc7-b3e3-5ec60c1ed4eb"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2FLK55-MD-%20LISCIO.jpg?alt=media&token=9cd150dd-cca8-4205-9d64-eb66135517bd"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2FLK84-MD-%20LISCIO.jpg?alt=media&token=303bae06-e2ca-41a4-bfe1-352893d41891"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2FNOCE%20NAZIONALE%20LISCIO%20(COLORE%20STANDARD).jpg?alt=media&token=16ee1c36-96a7-478d-ac37-78eb99bdd8d7"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2FWH84-MD-%20LISCIO.jpg?alt=media&token=cb26bd73-f75d-4b57-875d-74cca7f745bb"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2Fciliegio-%20LISCIO.jpg?alt=media&token=1ca0542d-e7b1-435e-be6c-84db4f401791"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2Fmogano-%20LISCIO.jpg?alt=media&token=37c429f2-fa3a-4948-841f-b9c791d02cbb"
                    />

                    <ColourCard
                        title=""
                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2Frovere-sbiancato-%20LISCIO.jpg?alt=media&token=ce88f638-68de-44c0-af8b-a679574452f1"
                    />



                </AliceCarousel>


            </div>

        );
    }


}

export default PanelSlider;
