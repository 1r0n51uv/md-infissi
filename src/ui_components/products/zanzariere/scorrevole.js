import React, {Component} from 'react';

class Scorrevole extends Component {
    render() {
        return (
            <div>
                <section className="about_us_area about_us_2 row">
                    <div className="container" style={{marginTop: '5%'}}>

                        <div className="row about_row about_us2_pages center-block">

                            <div className="wow fadeInRight col-md-6 center-block text-center">

                                <h2 style={{textAlign: 'left'}}>SCORREVOLE</h2>
                                <hr/>
                                <h3 style={{textAlign: 'left'}}>Zanzariera a telaio fisso in alluminio estruso, con ante scorrevoli laterali smontabili.
                                    Di facile montaggio. Adatta particolarmente per balconi.
                                    Tipologie possibili: a due, tre o più ante. Viene fornita di serie con rete in alluminio.
                                </h3>
                            </div>
                            <div className="col-md-6 center-block text-center">
                                <img
                                    style={{width: '80%'}}
                                    src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fzanzariere%2Fpegaso.jpg?alt=media&token=54d2e040-7218-4e7c-be96-63c6bc463d76"
                                    className="wow fadeInLeft img-responsive center-block text-center"
                                    alt=""/>
                            </div>

                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default Scorrevole;
