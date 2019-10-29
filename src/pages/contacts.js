import React, {Component} from 'react';

class Contacts extends Component {
    render() {
        return (
            <div>
                <section className="banner_area" data-stellar-background-ratio="0.5">
                    <h2>Contact Us</h2>
                    <ol className="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#" className="active">Contact Us</a></li>
                    </ol>
                </section>
                <div className="contact_map">
                    <iframe width="600" height="500" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=via%20farricella%2032%20striano&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    />
                </div>

                <section className="all_contact_info">
                    <div className="container">
                        <div className="row contact_row">
                            <div className="col-sm-6 contact_info">
                                <h2>Contact Info</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised words which
                                    don't look even slightly believable. If you are going to use a passage of Lorem
                                    Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
                                    text.</p>
                                <div className="location">
                                    <div className="location_laft">
                                        <a className="f_location" href="#">location</a>
                                        <a href="#">phone</a>
                                        <a href="#">email</a>
                                    </div>
                                    <div className="address">
                                        <a href="#">Traversa I Farricella, 30 <br/> Striano (NA)</a>
                                        <a href="#">081 8277044</a>
                                        <a href="#">info@thethemspro.com</a>
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

export default Contacts;
