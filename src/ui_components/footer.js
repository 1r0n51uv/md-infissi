import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer_area">
                <div className="container">
                    <div className="footer_row row">
                        <div className="col-md-3 col-sm-6 footer_about">
                            <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/logo%20minichini%20infissi.PNG?alt=media&token=1898be84-0538-4197-b003-cf68de944c56" alt=""/>
                                <p style={{fontSize: '120%'}}>La gamma di prodotti da noi offerti è studiata per rispondere alle esigenze più disparate di un mercato in costante crescita e sviluppo.</p>
                                <ul className="socail_icon text-right">
                                    <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true"/></a></li>
                                    <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"/></a></li>
                                </ul>
                        </div>

                        <div className="col-md-offset-6 col-md-3 col-sm-6 footer_about">
                            <h2>CONTATTACI</h2>
                            <address>
                                <ul className="my_address">
                                    <li><a href="mailto:mdinfissisrl@alice.it"><i className="fa fa-envelope" aria-hidden="true"></i>mdinfissisrl@alice.it</a></li>
                                    <li><a href="tel:081-8277044"><i className="fa fa-phone" aria-hidden="true"></i>081-8277044</a></li>
                                    <li><a href="tel:333-2508277"><i className="fa fa-phone" aria-hidden="true"></i>333-2508277</a></li>
                                    <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i><span>Via Farricella, 1 Traversa n°18, Striano (NA) </span></a>
                                    </li>
                                </ul>
                            </address>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
