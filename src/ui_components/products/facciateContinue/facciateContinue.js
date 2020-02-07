import React, {Component} from 'react';
import {Link} from "react-router-dom";


class FacciateContinue extends Component {
    render() {
        return (
            <div>

                <section className="about_us_area about_us_2 row">

                    <div className="container">

                        <div className="tittle wow fadeInUp" >
                            <h2 style={{fontFamily: 'Oswald', fontSize: '250%'}}>Facciate Continue</h2>
                        </div>

                    </div>

                </section>


                <section className="wow fadeIn our_services_tow row" style={{marginTop: '10%'}}>

                    <div className="container">

                        <div className="row">

                            <Link to="facciateContinue/strutturaleMeccanica">
                                <div className="col-md-6 col-sm-6 text-center center-block" style={{marginTop: '5%'}}>

                                    <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FfacciateContinue%2FFC1-min.png?alt=media&token=260c6044-0fcb-4904-a441-2d531713ff79"
                                         className="img-responsive"
                                         alt=""/>

                                </div>
                            </Link>

                            <Link to="facciateContinue/montanteTraversi">
                                <div className="col-md-6 col-sm-6 text-center center-block" style={{marginTop: '5%'}}>

                                    <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FfacciateContinue%2FFC2-min.png?alt=media&token=a04ae51c-ccb8-4155-a3b3-d277938f8000"
                                         className="img-responsive"
                                         alt=""/>

                                </div>
                            </Link>

                            <Link to="facciateContinue/continuaStrutturale">
                                <div className="col-md-6 col-sm-6 text-center center-block" style={{marginTop: '5%'}}>

                                    <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FfacciateContinue%2FFC3-min.png?alt=media&token=310d08fa-a880-4222-85f3-4b4c5af9241a"
                                         className="img-responsive"
                                         alt=""/>

                                </div>
                            </Link>

                            <div className="col-md-6 col-sm-6 text-center center-block" style={{marginTop: '5%'}}>

                                <div className="tittle wow fadeInUp">

                                    <div className="tittle text-center">
                                        <h2>Facciate Continue ColmaSRL</h2>
                                        <br/>
                                        <a href="https://www.colmasrl.com/facciate-continue/"
                                           className="text-center center-block button_all">Sito ufficiale</a>
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

export default FacciateContinue;
