import React, {Component} from 'react';
import ColourCard from "./colourCard";

class ScorrevolePvc extends Component {
    render() {
        return (
            <div>
                <section className="about_us_area about_us_2 row">

                    <div className="container" style={{marginTop: '5%'}}>

                        <div className="tittle wow fadeInUp">
                            <h1>SCORREVOLE PVC</h1>
                        </div>

                        <div className="row about_row about_us2_pages">

                            <div className="col-md-2">

                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FscorrevolePVC%2F4003-colma.png?alt=media&token=c046b34a-d334-42c3-a45b-0b4222b1f4d5"
                                    className="img-responsive"
                                    alt=""/>
                            </div>

                            <div className="col-md-4">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FscorrevolePVC%2Fnodo-4003.png?alt=media&token=7d1f467b-ae68-43e3-805c-a69626c5c122"
                                    className="img-responsive"
                                    alt=""/>
                            </div>

                            <div className="col-md-6">

                                <h2>4003</h2>

                                <hr/>

                                <h4><b>SCHEDA TECNICA SERIE:</b> 4003</h4>

                                <hr/>

                                <h4><b>PROFILATI:</b> PVC con rinforzi in acciaio</h4>
                                <h4 style={{marginTop: '1%'}}><b>TIPO DI TENUTA ARIA ACQUA:</b> Guarnizioni</h4>
                                <h4 style={{marginTop: '1%'}}><b>APPLICAZIONI VETRO:</b> con fermavetro</h4>
                                <h4 style={{marginTop: '1%'}}><b>CAMERA VETRO:</b> max 24mm</h4>

                                <hr/>

                                <h4><b>DIMENSIONI BASE DEL SISTEMA</b></h4>

                                <hr/>


                                <h4><b>Telaio fisso:</b> sezione da 68mm</h4>
                                <h4 style={{marginTop: '1%'}}><b>Telaio mobile:</b> sezione 45mm</h4>
                                <h4 style={{marginTop: '1%'}}><b>Nodo laterale:</b> 130mm</h4>
                                <h4 style={{marginTop: '1%'}}><b>Nodo centrale:</b> 84 mm</h4>
                                <h4 style={{marginTop: '1%'}}><b>Sistema di chiusura</b> multipunto</h4>
                                <h4 style={{marginTop: '1%'}}><b>Portata carrelli</b> 80kg</h4>


                                <hr/>

                                <h4><b>IMPIEGO</b></h4>

                                <hr/>

                                <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FscorrevolePVC%2FSchermata%202019-11-23%20alle%2019.04.06.png?alt=media&token=e0e823b6-4578-4e28-9b1f-9de5a415e868" className="img-responsive" alt=""/>



                            </div>

                            <div className="col-md-12 text-center center-block">


                                <div className="row">

                                    <div className="tittle wow fadeInUp">
                                        <h2>La nostra gamma di colori</h2>
                                    </div>

                                    <div className="col-md-offset-3 col-xs-offset-2">
                                        <div className="col-md-12 col-md-offset-2 center-block row" style={{marginTop: '5%'}}>

                                            <ColourCard
                                                image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FscorrevolePVC%2Fcolori%2FBIANCO%20MASSA%20PVC.jpg?alt=media&token=3e79c1de-83e9-441f-a66d-add4d1092110"
                                                title="Bianco massa"
                                            />

                                            <div className="col-md-1 col-xs-1"/>

                                            <ColourCard
                                                image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FscorrevolePVC%2Fcolori%2Fsheffield-oak-light%202.jpg?alt=media&token=c894132a-6503-4923-b5f1-8542ffb947df"
                                                title="Sheffield Oak"
                                            />

                                            <div className="col-md-1 col-xs-1"/>

                                            <ColourCard
                                                image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FscorrevolePVC%2Fcolori%2Fnussbaum%20COLORE%20PVC.jpg?alt=media&token=8f3d5953-50e1-4c29-b406-094a76f4aecb"
                                                title="Nussbaum"
                                            />

                                        </div>
                                    </div>





                                    <div className="col-md-12 row">


                                        <ColourCard
                                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FscorrevolePVC%2Fcolori%2Fgolden-oak%20COLORE%20PVC.jpg?alt=media&token=3f4bce31-e2ed-4bb4-afde-fb875d1dd754"
                                            title="Golden Oak"
                                        />

                                        <div className="col-md-1 col-xs-1"/>

                                        <ColourCard
                                            image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FscorrevolePVC%2Fcolori%2FBIANCO%20PELLICOLATO.jpg?alt=media&token=e4e2848b-493f-46d4-b7a4-ca23a09ef0a7"
                                            title="Bianco pellicolato"
                                        />

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

export default ScorrevolePvc;
