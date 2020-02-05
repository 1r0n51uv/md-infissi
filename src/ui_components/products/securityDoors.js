import React, {Component} from 'react';
import ColourSliderRal from "./window_frames/components/colourSliderRal";
import ColourSliderWood from "./window_frames/components/colourSliderWood";
import PanelSlider from "./securityDoors/PanelSlider";

class SecurityDoors extends Component {
    render() {
        return (
            <div>
                <section className="about_us_area about_us_2 row">

                    <div className="container" style={{marginTop: '5%'}}>

                        <div className="tittle wow fadeInUp" >
                            <h1 style={{fontFamily: 'Oswald'}}>PORTE BLINDATE</h1>
                        </div>

                        <div className="row about_row about_us2_pages center-block">

                            <div className="col-md-6 center-block text-center">

                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fdefender-7.jpg?alt=media&token=dd879a50-6d3c-4480-85e6-300720982afe"
                                    className="img-responsive center-block text-center"
                                    alt=""/>
                            </div>



                            <div className="col-md-6 wow fadeInLeft">

                                <h2>SICUREZZA E DESIGN​</h2>

                                <hr/>

                                <h4><b>CLASSE 3 ANTIEFFRAZIONE (12 PUNTI DI CHIUSURA)​</b></h4>
                                <h4>la capacità di resistere ai tentativi di effrazione della porta blindata​</h4>

                                <hr/>

                                <h4><b>ABBATTIMENTO ACUSTICO (30DB)​</b></h4>
                                <h4>la capacità di impedire il passaggio di rumore attraverso la porta blindata​</h4>

                                <hr/>

                                <h4><b>MARCATURA CE​</b></h4>
                                <h4>lLa marcatura CE di porte pedonali per uso esterno è disciplinata dalla norma UNI EN 14351-1 che ne definisce i requisiti obbligatori da dichiarare:​</h4>
                                <ul>
                                    <li><h4>permeabilità all’aria</h4></li>
                                    <li><h4>tenuta all’acqua</h4></li>
                                    <li><h4>resistenza al carico del vento​</h4></li>
                                    <li><h4>trasmittanza termica</h4></li>
                                    <li><h4>trasmittanza termica</h4></li>
                                    <li><h4>isolamento acustico</h4></li>
                                </ul>

                                <hr/>

                                <h4><b>TRASMITTANZA TERMICA (U=1,97 W/M2K)​</b></h4>
                                <h4>la capacità di impedire lo scambio termico tra due ambienti divisi dalla porta blindata​</h4>

                                <hr/>

                                <h4 className="center-block text-center"><b>COLORE PANNELLO STANDARD</b></h4>

                                <div className="row center-block text-center" style={{marginTop: '2%'}}>

                                    <div className="col-md-push-4 col-md-3 col-xs-3 col-xs-push-4 col-sm-push-4 col-sm-3 center-block text-center" >
                                        <img
                                            className="img-responsive text-center center-block"
                                            src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2Fporte%2FNOCE%20NAZIONALE%20LISCIO%20(COLORE%20STANDARD).jpg?alt=media&token=16ee1c36-96a7-478d-ac37-78eb99bdd8d7"
                                            alt=""/>
                                    </div>

                                </div>




                            </div>





                        </div>

                        <hr/>

                        <div className="row about_row about_us2_pages center-block">



                            <div className="col-md-6 wow fadeInLeft">


                                <h4><b>Controtelaio:</b> in acciaio zincato spessore 20/10, dotato di otto zanche antisfilamento per l’ancoraggio al muro;</h4>

                                <hr/>

                                <h4><b>Telaio:</b> in acciaio zincato spessore 20/10 verniciato a polvere epossidica di colore standard nero, registrabile per una facile posa in opera;</h4>

                                <hr/>

                                <h4><b>Struttura perimetrale:</b> realizzata in alluminio verniciato a polvere epossidica di colore standard nero;</h4>

                                <hr/>
                                <h4><b>Pannelli di rivestimento:</b> disponibili nelle diverse serie dei lisci, massello, pantografati basic, elite ed effetto massello, alluminio, PVC, pietra, vetro;</h4>

                                <hr/>

                                <h4><b>Maniglieria:</b> pomolo esterno, posizionabile a centro porta o lateralmente, e maniglia interna in alluminio anodizzato bronzo o color argento ( finiture standard);</h4>

                                <hr/>

                                <h4><b>Lama parafreddo:</b> sigilla la porta al pavimento evitando spifferi d’aria e lame di luce. Azionando la chiusura, la lama si abbassa progressivamente;</h4>

                                <hr/>

                                <h4><b>Spioncino:</b> a tutto campo, consente un’ampia visuale;</h4>

                                <hr/>

                                <h4><b>Dispositivo antischeda in acciaio e registro scrocco:</b> apposto sul telaio, impedisce l’apertura della porta con l’inserimento di schede o di altri oggetti sottili, anche se non sono state girate le mandate;</h4>

                                <hr/>



                            </div>

                            <div className="col-md-6 center-block text-center">

                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FporteBlindate%2FCONTROTELAIO%20defender-6.jpg?alt=media&token=c943ba3e-e41b-47b8-b147-79a355f97c6d"
                                    className="img-responsive center-block text-center"
                                    alt=""/>
                            </div>

                            <div className="col-md-12 text-center center-block">

                                <div className="row">


                                    <div className="col-md-12">
                                        <div className="tittle wow fadeInUp">
                                            <h2>I pannelli <br/>
                                                Scegli il tuo stile preferito
                                            </h2>
                                        </div>

                                    </div>

                                    <div className="col-md-10 col-md-offset-1 wow fadeInLeft" style={{marginTop: '10%'}}>

                                        <PanelSlider />


                                    </div>


                                </div>
                                <div className="row">


                                    <div className="col-md-12">
                                        <div className="tittle wow fadeInUp">
                                            <h2>La nostra gamma di colori ral</h2>
                                        </div>

                                    </div>

                                    <div className="col-md-10 col-md-offset-1 wow fadeInLeft" style={{marginTop: '10%'}}>

                                        <ColourSliderRal />


                                    </div>


                                </div>



                            </div>

                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default SecurityDoors;