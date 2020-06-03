import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BattentePvc extends Component {
    render() {
        return (
            <div>
                <section className="about_us_area about_us_2 row">

                    <div className="container">

                        <div className="tittle wow fadeInUp" >
                            <h2 style={{fontFamily: 'Oswald', fontSize: '250%'}}>Battenti PVC</h2>
                        </div>

                    </div>

                </section>


                <section className="wow fadeIn our_services_tow row" style={{marginTop: '10%'}}>

                    <div className="container">

                        <div className="row center-block text-center">

                            <div className="container center-block text-center">


                                <div className="col-md-6 col-sm-6 text-center center-block" style={{marginTop: '5%'}}>
                                    <Link to="/battente_pvc/md68">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattentePVC%2Fmd68.png?alt=media&token=fcf6282b-b580-41ee-b8b6-543736dd7285"
                                             style={{width: '80%'}}
                                             className="img-responsive"
                                             alt=""/>
                                    </Link>
                                </div>



                                    <div className="col-md-6 col-sm-6 text-center center-block" style={{marginTop: '5%'}}>
                                        <Link to="/battente_pvc/md80">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattentePVC%2Fmd80.png?alt=media&token=90745d1b-d924-4c4e-be91-0038b3d44ba0"
                                             style={{width: '80%'}}
                                             className="img-responsive"
                                             alt=""/>
                                        </Link>
                                    </div>


                                <Link to="/battente_pvc/s8000">
                                    <div className="col-md-pull-3 col-md-6 col-sm-6 text-center center-block" style={{marginTop: '5%'}}>

                                        <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FbattentePVC%2Fmd80%20copia.png?alt=media&token=3cdb008b-3a26-48a8-b4a1-fd9d07b599cb"
                                             style={{width: '70%'}}
                                             className="img-responsive"
                                             alt=""/>

                                    </div>
                                </Link>
                            </div>

                        </div>


                    </div>

                </section>

            </div>
        );
    }
}

export default BattentePvc;
