import React, {Component} from 'react';

class Contacts extends Component {
    render() {
        return (
            <div>
                <section className="banner_area" data-stellar-background-ratio="0.5">
                    <h2>Contatti</h2>
                </section>
                <div className="contact_map">
                    <iframe width="600" height="500" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=via%20farricella%2032%20striano&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    />
                </div>

                <section className="all_contact_info">
                    <div className="container">
                        <div className="row contact_row">
                            <div className="col-md-7">
                                <div className="col-md-12 col-sm-12 contact_info cardBox" style={{borderRadius: '20px', padding: '5%'}}>
                                    <h2>Informazioni</h2>
                                    <div className="row justify-content-left">

                                        <div>
                                            <div className="col-md-4 text-left" style={{marginTop: '3%'}}>
                                                <h4><i className="fas fa-map-marker-alt"/> <b>Sede operativa:</b></h4>
                                            </div>
                                            <div className="col-md-8 text-left" style={{marginTop: '3%'}}>
                                                <a href="#" style={{color: '#f6b60b'}}>
                                                    <h4>Via Farricella, 1 Traversa n°18</h4>
                                                    <h4>Striano (NA)</h4>
                                                </a>
                                            </div>

                                        </div>

                                        <div>
                                            <div className="col-md-4 text-left" style={{marginTop: '3%'}}>
                                                <h4><i className="fas fa-phone-square"/> <b>Cellulare:</b></h4>
                                            </div>
                                            <div className="col-md-8 text-left" style={{marginTop: '3%'}}>
                                                <a style={{color: '#f6b60b'}} href="">
                                                    <h4>333-2508277</h4>
                                                </a>
                                            </div>

                                        </div>

                                        <div>
                                            <div className="col-md-4 text-left" style={{marginTop: '3%'}}>
                                                <h4><i className="fas fa-phone-square"/> <b>Telefono:</b></h4>
                                            </div>
                                            <div className="col-md-8 text-left" style={{marginTop: '3%'}}>
                                                <a style={{color: '#f6b60b'}} href="">
                                                    <h4>081-8277044</h4>
                                                </a>
                                            </div>

                                        </div>

                                        <div>
                                            <div className="col-md-4 text-left" style={{marginTop: '3%'}}>
                                                <h4><i className="fas fa-envelope-open"/> <b>Email:</b></h4>
                                            </div>
                                            <div className="col-md-8 text-left" style={{marginTop: '3%'}}>
                                                <a href="#" style={{color: '#f6b60b'}}>
                                                    <h4>mdinfissisrl@alice.it</h4>
                                                </a>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 contact_info cardBox" style={{borderRadius: '20px', padding: '5%', marginTop: '10%'}}>
                                    <h2>Seguici sui social</h2>
                                    <div className="row justify-content-center">
                                        <br/>
                                        <div className="col-md-12 text-center">
                                            <a href="">
                                                <i style={{fontSize: '350%', color: '#3b5998'}} className="fab fa-facebook-square"/>
                                            </a>

                                            <a href="">
                                                <i style={{fontSize: '350%', marginLeft: '20%', color: '#C13584'}} className="fab fa-instagram"/>
                                            </a>
                                        </div>


                                    </div>
                                </div>
                            </div>


                            <div className="col-md-5">
                                <div className="col-md-12 col-sm-12 col-md-offset-1 about_client about_pages_client" style={{marginTop: '10%'}}>
                                    <img
                                        style={{borderRadius: '20px'}}
                                        className="cardBox img-responsive"
                                        src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/contacts%2F2451377.jpg?alt=media&token=d3ad7b5f-0bca-44a9-9773-6bf0e96ccb43" alt=""/>
                                </div>
                            </div>



                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contacts;
