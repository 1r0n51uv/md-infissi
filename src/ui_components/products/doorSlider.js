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
                        autoPlay={true}
                        responsive={this.state.responsive}
                        mouseDragEnabled={true}
                        autoPlayInterval={2000}
                    >

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F113-M-449x1030MASSELLO.jpg?alt=media&token=28809c2f-60d9-45b4-a287-d36a05b5d554"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F120-M-449x1030MASSELLO.jpg?alt=media&token=906f1003-9cff-47a1-acbf-a12b6b9315c1"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F130B-M-449x1030MASSELLO.jpg?alt=media&token=6b9f5009-b67b-44f2-b641-b0c2011f33c7"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F131-E-449x1030PANTOGRAFATI%20ELITE.jpg?alt=media&token=3a600ecc-f18b-43e0-8c64-9e80a60eafc0"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F164-E-449x1030%20PANTOGRAFATI%20ELITE.jpg?alt=media&token=91a4fccc-4b49-418a-b749-6e33ed2b6a18"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F165-E-449x1030PANTOGRAFATI%20ELITE.jpg?alt=media&token=882bc219-bae8-474e-9e4c-41d90f1b26d7"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F181-E-449x1030%20PANTOGRAFATI%20ELITE.jpg?alt=media&token=18cb122a-3e55-4aea-a87f-d621a3d4c05e"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F21-P-449x1030PANTOGRAFATI%20BASIC.jpg?alt=media&token=9b3a0fa9-a25f-4311-ac4d-fe7f1461485c"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F35-M-449x1030%20MASSELLO.jpg?alt=media&token=2f474a97-67ab-4dc2-a605-26b85c861ffc"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F4-P-449x1030%20PANTOGRAFATI%20BASIC.jpg?alt=media&token=e945e76f-dc90-467b-96e7-ce19e57a88ac"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F503-AL-449x1030%20ALLUMINIO.jpg?alt=media&token=5529332f-fc03-46b6-90ee-63459d836484"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F504-AL-449x1030ALLUMINIO.jpg?alt=media&token=c2b2ff54-743d-414e-b153-780f78e4273c"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F505-AL-449x1030ALLUMINIO.jpg?alt=media&token=9af2f985-96ff-404b-b97b-3b1e6a702a31"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2F82T-P-449x1030PANTOGRAFATI%20BASIC.jpg?alt=media&token=1830d2ce-22cf-4127-8f20-9d5a734c2729"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2FLG18-MD-449x1030%20LISCIO.jpg?alt=media&token=f1cef3d3-10a4-4fc4-a1ea-fdca419c8dee"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2FLG69-MD-449x1030%20LISCIO.jpg?alt=media&token=8cc41db7-ef50-4b29-9d20-48a186162b71"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2FLK55-MD-449x1030%20LISCIO.jpg?alt=media&token=38b64e3d-e27c-40b9-b1be-75994a580ecb"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2FLK84-MD-449x1030%20LISCIO.jpg?alt=media&token=02bf36bd-9d1d-4359-a855-cc02de33449f"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2FWH84-MD-449x1030%20LISCIO.jpg?alt=media&token=e9241fb6-3a35-4e2e-a6db-644c69f4b109"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2Fciliegio-449x1030%20LISCIO.jpg?alt=media&token=148506ef-9100-4857-af59-18139e91e58a"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2Fmogano-449x1030%20LISCIO.jpg?alt=media&token=30c097bc-3edb-4495-9057-57cd25403449"
                        />

                        <SinglePanelDoorSlider
                            img="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2Frovere-sbiancato-449x1030%20LISCIO.jpg?alt=media&token=737478f2-fdb2-4cfe-b9f8-7edd994acfa3"
                        />


                    </AliceCarousel>



                </div>

            </div>

        );
    }
}

export default DoorSlider;
