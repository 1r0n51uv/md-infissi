import React, {Component} from 'react';
import PergolaSlider from "./pergola_slider";

class PergolaClimatica extends Component {
    render() {
        return (
            <div>
                <section className="about_us_area about_us_2 row">

                    <div className="container" style={{marginTop: '5%'}}>

                        <div className="tittle wow fadeInUp" >
                            <h2 style={{fontFamily: 'Oswald', fontSize: '250%'}}>Pergola bioclimatica di gibus</h2>
                        </div>

                    </div>

                </section>

                <section className="wow fadeIn our_services_tow row" style={{marginTop: '10%'}}>
                    <PergolaSlider />

                    <br/>
                    <div className="col-md-6 col-sm-6 col-md-offset-3 col-sm-offset-3 col-xs-8 col-xs-offset-2">
                        <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FpergolaClimatica%2FPERGOLA%20BIOCLIMATICA.png?alt=media&token=eb7ff796-49ed-4dbf-9bf1-b2dd33878e44"
                             className="img-responsive"
                             alt=""/>
                    </div>

                    <div className="col-md-10 text-center col-md-offset-1">
                        <hr/>
                        <h3>Pergola bioclimatica modulare in alluminio estruso verniciato a polveri, disponibile nella versione isola o addossata. La struttura integra completamente le chiusure avvolgibili Zip all’interno dei profili, abbinando la performance funzionale al minimalismo delle linee. Med Varia permette l’accoppiamento sui lati di chiusure vetrate, utili per i mesi più freschi, e teli screen ombreggianti, indispensabili nel periodo estivo. Diventa così una soluzione dalla configurazione modulabile a seconda del clima ed utilizzabile in tutte le stagioni. Il brevetto Side Seal garantisce l’isolamento perimetrale della copertura. Il brevetto Twist Motion consente la rotazione delle lame da 0° a 135°. Le lame, se poste in posizione leggermente aperta, creano un microclima confortevole e bloccano le radiazioni dirette del sole. Una volta chiuse, proteggono dalla pioggia e l’acqua viene convogliata nei pluviali integrati.</h3>
                    </div>



                </section>

                <div className="tittle wow fadeInUp" >
                    <h2 style={{fontFamily: 'Oswald', fontSize: '250%'}}>Adatta ad ogni stagione</h2>
                </div>

                <section className="wow fadeIn about_us_area about_us_2 row" style={{marginTop: '10%'}}>

                    <div className="container">

                        <div className="row">

                            <div className="col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                                <video style={{width: '100%'}} controls autoPlay={true} loop={true}>


                                    <source src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FpergolaClimatica%2FGibus_MedVaria_animazioni_no_iconsSL_0%20(1).mp4?alt=media&token=6625e607-80a0-4e27-a26b-0c45808cb935" type="video/mp4"/>
                                </video>
                            </div>



                        </div>

                    </div>



                </section>

                <section className="wow fadeIn our_services_tow row">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-12 text-center wow fadeInUp">

                                <div className="tittle text-center">
                                    <h2>Pergole Bioclimatiche Gibus </h2>
                                    <br/>
                                    <a href="https://www.gibus.com/it/prodotto/pergola-bioclimatica-med-varia"
                                       className="text-center center-block button_all">Sito ufficiale</a>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


            </div>
        );
    }
}

export default PergolaClimatica;
