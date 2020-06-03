import React, {Component} from 'react';
import Gallery from "react-photo-gallery";

const photos = [
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FMinimaliTT%2Fmaxvision%2Ffewfe%20titolo.png?alt=media&token=36acc805-d223-47ee-b889-957ac074d2cf',
        width: 1,
        height: 1
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FMinimaliTT%2Fmaxvision%2FSfewfewenza%20titolo.png?alt=media&token=d24214ee-c48c-4ebd-8bde-f4be7d1ed159',
        width: 16,
        height: 9
    }
];

class Maxvision extends Component {
    render() {
        return (
            <div>
                <section className="about_us_area about_us_2 row">

                    <div className="container" style={{marginTop: '5%'}}>

                        <div className="tittle wow fadeInUp">
                            <h1 style={{fontFamily: 'Oswald'}}>MINIMALE SCORREVOLE ALLUMINIO TAGLIO TERMICO</h1>
                        </div>

                        <div className="row about_row about_us2_pages center-block">

                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12 center-block">

                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FMinimaliTT%2Fmaxvision%2Fmax%20titolo.png?alt=media&token=4d84cfdd-74b4-4b2b-9913-a6bd8db1a591"
                                            className="img-responsive"
                                            alt=""/>
                                    </div>


                                </div>
                            </div>

                            <div className="col-md-6 wow fadeInLeft">

                                <hr/>

                                <h4><b>MAXVISION:</b></h4>
                                <hr/>
                                <h4><b>SCHEDA TECNICA SERIE: MAX VISION (sistema scorrevole ad elevate portate)</b></h4>

                                <hr/>

                                <h4 style={{marginTop: '1%'}}><b>PROFILATI estrusi lega:</b> 6060(UNI 9006/1) </h4>
                                <h4 style={{marginTop: '1%'}}><b>TOLLERANZE DIMENSIONALI E SPESSORI:</b> UNI EN 12020-02  </h4>
                                <h4 style={{marginTop: '1%'}}><b>TIPO DI TENUTA ARIA ACQUA:</b> Con spazzolini  </h4>
                                <h4 style={{marginTop: '1%'}}><b>TAGLIO TERMICO:</b> realizzato con astine continue sagomate in poliammide rinforzata con fibre di vetro da 24mm   </h4>
                                <h4 style={{marginTop: '1%'}}><b>APPLICAZIONI VETRO:</b>con vetro ad infilare </h4>
                                <h4 style={{marginTop: '1%'}}><b>CAMERA VETRO:</b> 52mm </h4>

                                <hr/>


                                <h4 style={{marginTop: '1%'}}><b>DIMENSIONI BASE DEL SISTEMA</b></h4>
                                <h4 style={{marginTop: '1%'}}><b>Telaio fisso:</b> sezione da mm. 162 </h4>
                                <h4 style={{marginTop: '1%'}}><b>Telaio mobile:</b> sezione mm. 58 </h4>
                                <h4 style={{marginTop: '1%'}}><b>Nodo laterale:</b> mm. 71 a scomparsa nel muro (parte a vista 5mm) </h4>
                                <h4 style={{marginTop: '1%'}}><b>Nodo centrale:</b> mm. 27 </h4>
                                <h4 style={{marginTop: '1%'}}><b>Sistema di chiusura:</b> multipunto </h4>
                                <h4 style={{marginTop: '1%'}}><b>Portata carrelli:</b> fino a 500Kg </h4>

                                <hr/>

                                <h4 style={{marginTop: '1%'}}><b>IMPIEGO</b></h4>
                                <br/>
                                <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FMinimaliTT%2Fmaxvision%2Fcew%20titolo.png?alt=media&token=b1f9bdaa-dea1-4c96-b34c-4b49c2d975cb" alt="" className="img-responsive"/>

                            </div>



                            <div className="col-md-12" style={{marginTop: '5%'}}>
                                <h4><b>REALIZZAZIONI: </b></h4>
                                <br/>


                                <Gallery photos={photos} />

                            </div>


                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default Maxvision;
