import React, {Component} from 'react';
import AliceCarousel from "react-alice-carousel";
import SinglePanelDoorSlider from "../../singlePanelDoorSlider";
import ColourSliderElements from "./colourSliderElements";


class ColourSlider extends Component {
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
                        autoPlayInterval={1000}
                    >

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2F1013gr.jpg?alt=media&token=fce71036-346a-40aa-87da-011339cd4265"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2F6005gr.jpg?alt=media&token=867fae61-dc8a-4331-b78d-47d6c18be6b3"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2FGRIGIO-RAFFAELLO.png?alt=media&token=b8a7ff0e-c7f7-4a39-a431-5ea7f9caedb8"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2FMARRONE-RAFFAELLO.png?alt=media&token=9025a73d-84b3-473f-9fa4-ee88cd827dab"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff111.jpg?alt=media&token=d64856f8-2f46-4aff-9bc2-afbb1b2fdefd"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff115.jpg?alt=media&token=3a728d6c-e3b6-4683-903e-6d24e7dea192"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff200.jpg?alt=media&token=98747275-9d4c-4016-860f-c23e9bce53c8"
                        />

                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff204.jpg?alt=media&token=685e23a2-82c8-476c-90b2-2b5f2080c6ad"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff115.jpg?alt=media&token=3a728d6c-e3b6-4683-903e-6d24e7dea192"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff200.jpg?alt=media&token=98747275-9d4c-4016-860f-c23e9bce53c8"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff204.jpg?alt=media&token=a3f50ccd-f517-49df-b013-72b08a929934"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff206.jpg?alt=media&token=d9c37241-246e-44a2-bc89-2c48e7a63b79"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff208.jpg?alt=media&token=2b51b6b5-a80b-46d8-ba7a-6a7340a01e37"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff209.jpg?alt=media&token=86331b3a-a32a-436f-87d2-ba20c289c358"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff210.jpg?alt=media&token=2a432bf2-8ee0-402e-b535-521b5d819a70"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff211.jpg?alt=media&token=e8bc0b32-0eeb-4259-b22b-357f912d35c3"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff213.jpg?alt=media&token=09166471-440c-451c-a69e-91b3433d3701"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff219.jpg?alt=media&token=78f4dc69-657b-4fac-b254-74e8c324f635"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff221.jpg?alt=media&token=42643578-abfd-41a7-9fdd-13d71ac48ae1"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Ff235.jpg?alt=media&token=177c6585-3b2f-4145-a1bb-82af7463281b"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral-1013-mr.png?alt=media&token=65daf4f5-48e2-424f-b02a-5f2083520413"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral-9010-mr.png?alt=media&token=450b329b-a0a9-49f1-bb78-363b7986e8b3"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral1013.jpg?alt=media&token=0cc05ff6-9f94-4b8c-84f5-6df38213ab8d"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral6005.jpg?alt=media&token=efdec211-ebcb-4ea2-9a9a-9ca72b2b0db4"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral7001.jpg?alt=media&token=0870a865-5574-4179-bef3-ecc39a17c8b5"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral7016.jpg?alt=media&token=e1c5a3ea-26fe-4505-9ba6-179550389995"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral8011.jpg?alt=media&token=a4db398c-a04e-4d7c-986d-b8c8b7e4fe0c"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral8017.jpg?alt=media&token=db8acf69-89a6-4ef7-9d1b-71fc85f98aa9"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral8019.jpg?alt=media&token=7ddfb750-50f1-4d78-8ac1-17abd4348572"
                        />
                        <ColourSliderElements
                            title=""
                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fcolori%2FRAL%2Fral9010.jpg?alt=media&token=e8e1556c-58c0-4b1e-83e4-91c5dcf05b07"
                        />

                    </AliceCarousel>



                </div>

        );
    }
}

export default ColourSlider;
