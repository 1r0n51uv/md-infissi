import React, {Component} from 'react';
import ColourCard from "../../components/colourCard";
import ColourSliderRal from "../../components/colourSliderRal";
import ColourSliderWood from "../../components/colourSliderWood";

class BattenteAl extends Component {
    render() {
        return (
            <div>
                <section className="about_us_area about_us_2 row">

                    <div className="container" style={{marginTop: '5%'}}>

                        <div className="tittle wow fadeInUp">
                            <h1 style={{fontFamily: 'Oswald'}}>BATTENTE ALLUMINIO TAGLIO TERMICO</h1>
                        </div>

                        <div className="row about_row about_us2_pages center-block">

                            <div className="col-md-3 center-block">

                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2FSerramenti-a-taglio-termico.png?alt=media&token=9bf41105-9498-478d-bd5f-8795863a1089"
                                    className="img-responsive"
                                    alt=""/>
                            </div>

                            <div className="col-md-4">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattenteAL%2Fscheda%20tecnica%20fc68tt.PNG?alt=media&token=18da41d0-847e-42d2-976d-5cff5fdc68bc"
                                    className="img-responsive"
                                    alt=""/>
                            </div>

                            <div className="col-md-5 wow fadeInLeft">

                                <h2>FC 68TT</h2>

                                <hr/>

                                <h4><b>SCHEDA TECNICA</b></h4>

                                <hr/>

                                <h4><b>PROFILATI ESTRUSI LEGA:</b> 6060 (UNI9006/1)</h4>
                                <h4 style={{marginTop: '1%'}}><b>STATO FINITURA:</b> T5</h4>
                                <h4 style={{marginTop: '1%'}}><b>TOLLERANZE:</b> UNI EN 12020-2</h4>
                                <h4 style={{marginTop: '1%'}}><b>TIPO DI TENUTA ARIA-ACQUA:</b> GIUNTO APERTO (FINESTRE)- DOPPIA GUARNIZONE IN BATTUTA (PORTE)</h4>
                                <h4 style={{marginTop: '1%'}}><b>TIPO DI PROFILATO:</b> A ISOLAMENTO TERMICO (con listelli in poliammide di H = 32mm)</h4>

                                <hr/>

                                <h4><b>DIMENSIONE BASE</b></h4>

                                <hr/>


                                <h4><b>TELAIO FISSO PROFONDITA':</b> 67,8 – 154,8 mm</h4>
                                <h4 style={{marginTop: '1%'}}><b>TELAIO MOBILE PROFONDITA':</b> 75,8 – 85,7mm</h4>
                                <h4 style={{marginTop: '1%'}}><b>ALTEZZA ALETTE SEDE DEL VETRO:</b> 22mm</h4>
                                <h4 style={{marginTop: '1%'}}><b>SOVRAPPOSIZIONE BATTUTA INTERNA:</b> Finestra 8mm</h4>
                                <h4 style={{marginTop: '1%'}}><b>Scalanatura tra un profilo e l’altro:</b>Finestra 4,5 mm.(esterno)/4 mm.(interno centrale)</h4>
                                <h4 style={{marginTop: '1%'}}><b>Altezza di sovrapposizione al muro:</b> 22 mm – 58mm</h4>

                                <hr/>

                            </div>

                            <div className="col-md-12 text-center center-block">


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
                                <div className="row">


                                    <div className="col-md-12">
                                        <div className="tittle wow fadeInUp">
                                            <h2>La nostra gamma di colori effetto legno</h2>
                                        </div>

                                    </div>

                                    <div className="col-md-10 col-md-offset-1 wow fadeInLeft" style={{marginTop: '10%'}}>

                                        <ColourSliderWood />


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

export default BattenteAl;
