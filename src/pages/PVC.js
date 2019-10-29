import React, {Component} from 'react';
import porta from "../res/pvc.png";

class Pvc extends Component {
    render() {
        return (


            <section className="about_us_area row text-center" >

                <div className="container">
                    <div className="tittle wow fadeInUp">
                        <h2>Pvc</h2>
                    </div>
                    <div className="row about_row">
                        <div className="who_we_area col-md-6 col-sm-6 wow fadeInLeft">
                            <div className="subtittle">
                                <h2>WHO WE ARE</h2>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                        <div className="col-md-6 col-sm-6 about_client wow fadeInRight">
                            <img src={porta}  alt=""/>
                        </div>

                    </div>
                </div>

            </section>


        );
    }
}

export default Pvc;
