import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MinimaliHome extends Component {
    render() {
        return (
            <div>

                <section className="about_us_area about_us_2 row">

                    <div className="container">

                        <div className="tittle wow fadeInUp" >
                            <h2 style={{fontFamily: 'Oswald', fontSize: '250%'}}>Minimali Alluminio TT</h2>
                        </div>

                    </div>

                </section>


                <section className="wow fadeIn our_services_tow row" style={{marginTop: '10%'}}>

                    <div className="container">

                        <div className="row center-block text-center">

                            <div className="container center-block text-center">

                                <Link to="minimali_TT/ekuPerfectionStrutturale">
                                    <div className="col-md-push-1 col-md-4 col-sm-6 text-center center-block" style={{marginTop: '5%'}}>

                                        <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FMinimaliTT%2F184_n_COTTODESTE-BLACK-WHITE-SNOW-3plus-100X100%20copia%203.jpg?alt=media&token=5e2966ca-585c-4174-af1d-1217d5e7a4aa"
                                             style={{width: '80%'}}
                                             className="img-responsive"
                                             alt=""/>

                                    </div>
                                </Link>

                                <Link to="minimali_TT/ekuPerfectionSlide">
                                    <div className="col-md-push-3 col-md-4 col-sm-6 text-center center-block" style={{marginTop: '5%'}}>

                                        <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FMinimaliTT%2F184_n_COTTODESTE-BLACK-WHITE-SNOW-3plus-100X100%20copia%202.jpg?alt=media&token=0f79393c-d4cc-4689-9980-0ff0511c610a"
                                             style={{width: '80%'}}
                                             className="img-responsive"
                                             alt=""/>

                                    </div>
                                </Link>

                                <Link to="minimali_TT/maxvision">
                                    <div className="col-md-6 col-sm-6 text-center center-block" style={{marginTop: '5%'}}>

                                        <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FMinimaliTT%2FSenza%20titol3o.png?alt=media&token=54d0622b-087c-4a5b-8fc6-2591bf64f97f"
                                             style={{width: '80%'}}
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

export default MinimaliHome;
