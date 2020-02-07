import React, {Component} from 'react';

class FcStruttMecc extends Component {
    render() {
        return (
            <div>
                <section className="about_us_area about_us_2 row">

                    <div className="container" style={{marginTop: '5%'}}>

                        <div className="tittle wow fadeInUp" >
                            <h2 style={{fontFamily: 'Oswald', fontSize: '250%'}}>FACCIATA CONTINUA STRUTTURALE MECCANICA</h2>
                        </div>


                        <div className="row about_row about_us2_pages center-block">


                            <div className="container" >

                                <div className="wow fadeInLeft row about_row about_us2_pages center-block">
                                    <div className="col-md-6 center-block text-center">
                                        <img
                                            style={{width: '80%'}}
                                            src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FfacciateContinue%2FFC4-min.png?alt=media&token=0edd72d4-5685-468b-afe6-e5c806f3f14f"
                                            className="img-responsive center-block text-center"
                                            alt=""/>
                                    </div>

                                    <div className="wow fadeInRight col-md-6 center-block text-center" style={{textAlign: 'left'}}>

                                        <h3>MAFC50BG</h3>
                                        <hr/>
                                        <h3><b>CARATTERISTICHE TECNICHE MAFC50S</b></h3>
                                        <h3>Profondità montante 29 – 250 mm<br/>
                                            Profondità traverso 29 – 180 mm<br/>
                                            Sezione in mostra 50 mm<br/>
                                            Isolamento termico distanziali in PVC<br/>
                                            Assemblaggio Frontale e sequenziale<br/>
                                            Sistema di tenuta Guarnizioni</h3>
                                    </div>

                                    <div className="col-md-5 col-sm-8 col-xs-12" style={{marginTop: '5%'}}>

                                        <img
                                            className="img-responsive"
                                            src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2FfacciateContinue%2FFC7.png?alt=media&token=029d078c-d1fb-4c55-a427-21190c21b17a" alt=""/>


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

export default FcStruttMecc;
