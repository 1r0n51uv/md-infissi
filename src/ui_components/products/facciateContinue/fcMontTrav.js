import React, {Component} from 'react';

class FcMontTrav extends Component {
    render() {
        return (
            <div>
                <section className="about_us_area about_us_2 row">

                    <div className="container" style={{marginTop: '5%'}}>

                        <div className="tittle wow fadeInUp" >
                            <h2 style={{fontFamily: 'Oswald', fontSize: '250%'}}>FACCIATA CONTINUA A MONTANTE E TRAVERSI</h2>
                        </div>


                        <div className="row about_row about_us2_pages center-block">


                            <div className="container" >

                                <div className="wow fadeInLeft row about_row about_us2_pages center-block">
                                    <div className="col-md-6 center-block text-center">
                                        <img
                                            style={{width: '80%'}}
                                            src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FfacciateContinue%2FFC5-min.png?alt=media&token=ea8deff3-1f22-4ff6-8e37-55f2b2afc6aa"
                                            className="img-responsive center-block text-center"
                                            alt=""/>
                                    </div>

                                    <div className="wow fadeInRight col-md-6 center-block text-center" style={{textAlign: 'left'}}>

                                        <h3>MAFC50</h3>
                                        <hr/>
                                        <h3><b>CARATTERISTICHE TECNICHE MAFC50</b></h3>
                                        <h3>Profondità montante 29 – 250 mm<br/>
                                        Profondità traverso 29 – 180 mm<br/>
                                        Sezione in mostra 50 mm<br/>
                                        Isolamento termico distanziali in PVC<br/>
                                        Assemblaggio Frontale e sequenziale<br/>
                                        Sistema di tenuta Guarnizioni
                                        </h3>
                                    </div>


                                </div>

                            </div>



                        </div>

                        <br/>
                    </div>
                </section>
            </div>
        );
    }
}

export default FcMontTrav;
