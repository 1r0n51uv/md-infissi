import React, {Component} from 'react';
import ColourSliderRal from "../../components/colourSliderRal";
import ColourSliderWood from "../../components/colourSliderWood";
import ColourCard from "../../components/colourCard";

class ScorrevoleAl extends Component {
    render() {
        return (
            <div>
                <section className="about_us_area about_us_2 row">

                    <div className="container" style={{marginTop: '5%'}}>

                        <div className="tittle wow fadeInUp">
                            <h1 style={{fontFamily: 'Oswald'}}>SCORREVOLE TAGLIO TERMICO:</h1>
                        </div>

                        <div className="row about_row about_us2_pages center-block">

                            <div className="col-md-2 center-block">

                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FscorrevoleAL%2FANGOLO%20SCORREVOLE%20TT.PNG?alt=media&token=6e726794-a90e-4517-9a77-f2403bee3a13"
                                    className="img-responsive"
                                    alt=""/>
                            </div>

                            <div className="col-md-4">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FscorrevoleAL%2FSCHEDA%20TECNICA%20SCORREVOLE%20TT.PNG?alt=media&token=984c8f31-5686-4687-ab8c-5ce0ba6a7faf"
                                    className="img-responsive"
                                    alt=""/>
                            </div>

                            <div className="col-md-6 wow fadeInLeft">

                                <h2>SCORREVOLE 78S</h2>

                                <hr/>

                                <h4><b>SCHEDA TECNICA</b></h4>

                                <hr/>

                                <h4><b>TIPO DI SISTEMA:</b> Scorrevole in Linea</h4>
                                <h4 style={{marginTop: '1%'}}><b>PROFILATI ESTRUSI:</b> Lega d'alluminio 6060 Al Mg 0.5, Si 0.4, Fe 0.2 secondo le norme UNI EN 573</h4>
                                <h4 style={{marginTop: '1%'}}><b>STATO DI FORNITURA:</b> T5 secondo la norma UNI EN 515 (equivalente TA 16)</h4>
                                <h4 style={{marginTop: '1%'}}><b>TOLLERANZE DIMENSIONALI E SPESSORE:</b> UNI EN 12020.2 e/o UNI EN 755-9</h4>

                                <hr/>

                                <h4><b>SISTEMA TENUTA ARIA, ACQUA E VENTO</b></h4>

                                <hr/>


                                <h4><b>FINESTRE E PORTEFINESTRE:</b> Guarnizioni di tenuta in E.P.D.M. rivestita con sistema di drenaggio delle acque meteoriche tramite accessori a valvole ad incasso</h4>
                                <h4 style={{marginTop: '1%'}}><b>CARATTERISTICHE PRINCIPALI:</b>

                                    <br/>- Giunzioni angoli da effettuare a 45°, per il telaio e l'anta
                                    <br/>- Chiusure laterali: possibilità di utilizzo di maniglie ad incasso o martellina. Possibilità di 2, 3 o più punti di chiusura
                                    <br/>- Carrelli di scorrimento: registrabili con ruote montate su cuscinetti a sfera
                                    <br/>- Sistema di drenaggio speciale con caditoie orizzontali e cassetto di evacuazione frontale
                                </h4>
                                <h4 style={{marginTop: '1%'}}><b>TAGLIO TERMICO:</b> Con barrette complanari in poliammide da mm 34, sia per il telaio che per l'anta </h4>
                                <h4 style={{marginTop: '1%'}}><b>DIMENSIONE DEL SISTEMA:</b>
                                    <br/>Telaio fisso sezione mm 78
                                    <br/>Telaio anta sezione mm 49
                                    <br/>Inserimento vetri variabile tra 25 e 35mm
                                </h4>
                                <h4 style={{marginTop: '1%'}}><b>ALTEZZA SEDE VETRO:</b> mm 21</h4>
                                <h4 style={{marginTop: '1%'}}><b>INSERIMENTO VETRO:</b> Fermavetro con aggancio a contrasto oppure profilati a vetro infilo</h4>
                                <h4 style={{marginTop: '1%'}}><b>GUARNIZIONI:</b> In gomma sintetica, EPDM</h4>
                                <h4 style={{marginTop: '1%'}}><b>ACCESSORI:</b> Idonei al sistema, in materiali inossidabili, costruiti da primarie case produttrici</h4>

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

                            <div className="col-md-12 text-center center-block">


                                <div className="row">


                                    <div className="col-md-12">
                                        <div className="tittle wow fadeInUp">
                                            <h2>La nostra gamma di maniglie</h2>
                                        </div>

                                    </div>

                                    <div className="col-md-10 col-md-offset-1 wow fadeInRight" style={{marginTop: '10%'}}>

                                        <table className="table-responsive" style={{borderColor: 'white'}}>

                                            <tbody>
                                            <tr>
                                                <td>
                                                    <ColourCard
                                                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FalzantePVC%2Fmaniglie%2FMANIGLIONE%20TOULON%20BIANCO.png?alt=media&token=9d004371-67ae-4566-8d32-46f6f1a7f26a"
                                                        title=""
                                                    />
                                                </td>

                                                <td>
                                                    <ColourCard
                                                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FalzantePVC%2Fmaniglie%2FMANIGLIONE%20CURVO%20ALZANTE.png?alt=media&token=e6998f4f-592f-45bc-ae7f-5915a84ec496"
                                                        title=""
                                                    />
                                                </td>


                                                <td>
                                                    <ColourCard
                                                        image="https://www.hoppe.com/medias/sys_master/root/hbf/h27/9128141488158/IMG-PRO-HS-0737-419N-AS-420-UG-F9016-SALL-APK-V1.png"
                                                        title=""
                                                    />
                                                </td>

                                                <td>
                                                    <ColourCard
                                                        image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FalzantePVC%2Fmaniglie%2FMANIGLIONE%20ORO%20ALZANTE.png?alt=media&token=e6c17b4e-9379-45da-8b1d-935c18946c0f"
                                                        title=""
                                                    />
                                                </td>

                                            </tr>
                                            </tbody>

                                        </table>

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

export default ScorrevoleAl;
