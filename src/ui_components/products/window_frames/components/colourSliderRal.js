import React, {Component} from 'react';
import AliceCarousel from "react-alice-carousel";
import ColourSliderElements from "./colourSliderElements";


class ColourSliderRal extends Component {
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
                    >

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2F1013gr.jpg?alt=media&token=10b2c349-a153-4182-910f-2864ccf1cba8"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2F1013gr.jpg?alt=media&token=10b2c349-a153-4182-910f-2864ccf1cba8"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2F7001%20GR.jpg?alt=media&token=9d347597-23d4-4ef4-ab70-9dd1929d0f09"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2F8019%20GR.jpg?alt=media&token=00f4eac8-72a3-48d1-9bb2-28bb11e3fb0e"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2F9005%20GR.jpg?alt=media&token=5a71d878-e624-42a8-994b-3f4c59b70ac7"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2F9010gr.jpg?alt=media&token=0b0a2301-0430-4289-806a-5a211627c4ea"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2FF111%20BIANCO%20ANTICO%20(PUNTINATI%20RUVIDI).jpg?alt=media&token=12cd95ba-21f5-4875-835a-edfb6dfbdde0"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff112%20GRIGIO%20ANTICO%20(PUNTINATI%20RUVIDI).jpg?alt=media&token=8f199dfb-2a95-4bac-a777-925bc6c797ce"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff113%20VERDE%20ANTICO%20(PUNTINATI%20RUVIDI).jpg?alt=media&token=e026ff4c-e335-4f1a-ba5b-670b17d12127"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff115%20MARRONE%20ANTICO%20(PUNTINATI%20RUVIDI).jpg?alt=media&token=98359df6-7e22-4fe7-b916-dca7e07adb95"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff200%20MARRONE%20MARMO%20(PUNTINATI%20LISCI).jpg?alt=media&token=98e874d3-14bb-4677-852a-1773115af425"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff204%20GRIGIO%20MARMO%20(PUNTINATI%20LISCI).jpg?alt=media&token=d02b7fd1-c45c-46cc-95d9-8bcf3893eef2"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff205%20VERDE%20MARMO%20(PUNTINATI%20LISCI).jpg?alt=media&token=6755b08d-85c6-4980-8023-570916b106c0"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff206%20MARRONE%20CUOIO%20(RUVIDO).jpg?alt=media&token=1fb58ec9-572a-4326-8adf-ccfb2f46fd45"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff208%20RAME%20BUGNATO.jpg?alt=media&token=6d5f94f8-273c-43f5-bbdc-27e8d963212c"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff209%20ROSSO%20MARMO%20(PUNTINATI%20LISCI).jpg?alt=media&token=e1663d25-5845-4e8d-b605-20a078807a88"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff210%20BIANCO%20MARMO%20(PUNTINATI%20LISCI).jpg?alt=media&token=4e7fb8d9-35f1-46f0-96f4-0ffc3ced29ad"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff211%20BRONZO%20BUGNATO.jpg?alt=media&token=940ba671-515f-4dcb-ad11-d8071e90b94d"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff213%20GRIGIO%20FERRO%20(RUVIDO).jpg?alt=media&token=4957d7be-a465-404c-848a-580fd92a8e8b"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff219%20NERO%20BUGNATO.jpg?alt=media&token=42eddbf3-a5c7-47f0-b7a7-c803eb4f6650"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff221%20VERDE%20BUGNATO.jpg?alt=media&token=f8a55a28-e748-4ded-8a79-9805642cd188"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff222%20VERDE%20MUSCHIO%20(RUVIDO).jpg?alt=media&token=25598537-9436-456a-ba5e-654a685ff3f9"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff235%20MARRONE%20MARS%20(PUNTINATI%20RUVIDI).jpg?alt=media&token=33dbcd4f-d43f-405a-8a03-58f38251308c"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral1013.jpg?alt=media&token=8d8a9861-e93d-4a40-afad-6057ce216636"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral6005.jpg?alt=media&token=e588fe29-cee0-46d7-93a4-8e87eec89f82"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral7001.jpg?alt=media&token=fdfff32d-79f9-4ca7-8bc5-d6bc3b61d3a7"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral7016.jpg?alt=media&token=ced56d61-f454-4de8-a282-5f955f96b8b2"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral8017.jpg?alt=media&token=d1a213ef-dd47-4237-aa82-deef6ed9ebca"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral8019.jpg?alt=media&token=34c5f2d8-6481-4e00-91ba-05ebb850df3d"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral9010.jpg?alt=media&token=a7c30bf3-0ae5-4355-bd3c-5caeb6439f42"
                        />




                    </AliceCarousel>



                </div>

        );
    }
}

export default ColourSliderRal;
