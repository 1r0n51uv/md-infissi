import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Zanzariere extends Component {


    render() {
        return (
            <div>
                <section className="about_us_area about_us_2 row">

                    <div className="container" style={{marginTop: '5%'}}>

                        <div className="tittle wow fadeInUp" >
                            <h2 style={{fontFamily: 'Oswald', fontSize: '250%'}}>ZANZARIERE</h2>
                        </div>


                        <div className="row about_row about_us2_pages center-block">

                            <Link to="zanzariere/bilaterale">
                                <div className="wow fadeInLeft col-md-6 center-block text-center">

                                    <img
                                        style={{width: '80%'}}
                                        src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fzanzariere%2Fbilaterale.png?alt=media&token=2935528c-753c-411a-8933-60479bd8f8e9"
                                        className="img-responsive center-block text-center"
                                        alt=""/>
                                    <hr/>
                                    <h3>Bilaterale a scomparsa</h3>
                                </div>
                            </Link>

                            <Link to="zanzariere/laterale">
                                <div className="wow fadeInRight col-md-6 center-block text-center">

                                    <img
                                        style={{width: '80%'}}
                                        src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fzanzariere%2FZANZARIERA%20A%20SCORRIMENTO%20LATERALE.jpg?alt=media&token=2156c135-7b3c-4f4b-b4b3-ca02de5a3f5e"
                                        className="img-responsive center-block text-center"
                                        alt=""/>
                                    <hr/>
                                    <h3>Laterale a scomparsa</h3>
                                </div>
                            </Link>

                            <Link to="zanzariere/verticale">
                                <div className="wow fadeInLeft col-md-6 center-block text-center">

                                    <img
                                        style={{width: '80%'}}
                                        src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fzanzariere%2FZanzariera-verticale-avvolgente-Ambra-500x500.jpg?alt=media&token=97db7354-5012-404f-8c7f-34b84591f7e4"
                                        className="img-responsive center-block text-center"
                                        alt=""/>
                                    <hr/>
                                    <h3>Verticale a molla</h3>
                                </div>

                            </Link>

                            <Link to="zanzariere/scorrevole">
                                <div className="wow fadeInRight col-md-6 center-block text-center">

                                    <img
                                        style={{width: '95%'}}
                                        src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fzanzariere%2Fpegaso.jpg?alt=media&token=54d2e040-7218-4e7c-be96-63c6bc463d76"
                                        className="img-responsive center-block text-center"
                                        alt=""/>
                                    <hr/>
                                    <h3>Scorrevole</h3>
                                </div>
                            </Link>




                        </div>

                        <br/>
                    </div>
                </section>






            </div>
        );
    }
}

export default Zanzariere;
