import React, {Component} from 'react';
class ChooseWindow extends Component {
    render() {
        return (
            <div>

                <section className="our_services_tow">
                    <div className="container">
                        <div className="tittle wow fadeInUp">
                            <h2 style={{fontSize: '350%'}}>Scegli il tuo infisso</h2>
                        </div>
                        <div className="architecture_area services_pages">
                            <div className="portfolio_item portfolio_2">

                                <div className="single_facilities col-sm-5 painting webdesign wow fadeInRight">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/home%2Finfissi_pvc-2.jpg?alt=media&token=f6ec4ab3-646b-4513-9f3a-5fcea2e530f2" alt=""/>
                                </div>
                                <div className="grid-sizer-2"></div>
                                <div className="single_facilities col-sm-6 col-sm-offset-1 painting building painting adversting wow fadeInLeft cardBox2" style={{borderRadius: '20px'}} >
                                    <div className="who_we_area text-center" style={{padding: '5%', lineHeight: '20px'}}>
                                        <div style={{padding: '5%'}}>
                                            <h2>I nostri sistemi in pvc sono in grado di soddisfare qualsiasi esigenza con alte
                                            prestazioni acustiche e termiche. <br/> <b>Il suo punto di forza? </b> <br/> <h2 style={{textDecoration: 'underline'}}>Rapporto qualità-prezzo </h2> </h2>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <hr/>
                        </div>
                    </div>
                </section>


                <section className="about_us_area row">
                    <div className="container">
                        <div className="row about_row">
                            <div className="who_we_area col-md-6 col-sm-6 cardBox2"
                                 style={{borderRadius: '20px', paddingTop: '5%', paddingLeft: '5%', paddingRight: '5%'}}>

                                <div className="subtittle">
                                    <h2>Alluminio taglio termico</h2>
                                </div>
                                <p style={{fontSize: '180%'}}>I serramenti in alluminio taglio termico, grazie alla modernità delle linee e alla
                                versatilità delle finiture, rendono il prodotto un oggetto dal design moderno e innovativo
                                </p>

                            </div>
                            <div className="col-md-offset-1 col-md-5 col-sm-6 about_client about_pages_client">
                                <img
                                    className="cardBox2"
                                    src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/home%2Ffinestra-in-alluminio%204.jpg?alt=media&token=be5cb456-f2df-45c0-873a-b4d98f403e18" alt=""/>
                            </div>

                        </div>
                        <div className="row about_row">
                            <div className="who_we_area col-md-6 col-sm-6 cardBox2"
                                 style={{borderRadius: '20px', paddingTop: '5%', paddingLeft: '5%', paddingRight: '5%'}}>

                                <div className="subtittle">
                                    <h2>Alluminio-Legno</h2>
                                </div>
                                <p style={{fontSize: '180%'}}>Se ami il legno naturale, ma anche i vantaggi strutturali
                                    di una finestra in alluminio, il sistema <b>Alluminio-Legno</b> è la scelta perfetta.
                                    Sono infissi con il lato esterno in alluminio, a cui si può applicare la finitura
                                    desiderata, e il lato interno rivestito da uno spesso strato di legno naturale, da scegliere
                                    tra i vari colori
                                </p>

                            </div>
                            <div className="col-md-offset-1 col-md-5 col-sm-6 about_client about_pages_client">
                                <img className="cardBox2"
                                    src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/home%2FINFISSI%20ALLUMINIO%20LEGNO.jpg?alt=media&token=118bf50a-4b43-431b-8669-da5be71ea4f1" alt=""/>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default ChooseWindow;
