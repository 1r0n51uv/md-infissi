import React, {Component} from 'react';
import FormPreventivo from "../ui_components/preventivo/formPreventivo";

class Preventivo extends Component {
    render() {
        return (

            <div>
                <section className="our_achievments_area" data-stellar-background-ratio="0.3">
                    <div className="container">
                        <div className="tittle wow fadeInUp">
                            <h2>Richiedi un preventivo</h2>
                        </div>
                        <div className="achievments_row row">
                            <div className="col-md-4 col-sm-6 p0 completed">
                                <i className="fas fa-euro-sign" aria-hidden="true"/>
                                <span className="counter">Gratuito</span>
                                <h6>Nessun costo di pratica</h6>
                            </div>

                            <div className="col-md-4 col-sm-6 p0 completed">
                                <i className="fas fa-user-cog"/>
                                <span className="counter">Su misura per te</span>
                                <h6>Personalizza il tuo infisso</h6>
                            </div>

                            <div className="col-md-4 col-sm-12 p0 completed">
                                <i className="fas fa-envelope"/>
                                <span className="counter">Sempre disponibile</span>
                                <h6>Riceverai il preventivo via email</h6>
                            </div>
                        </div>


                    </div>

                </section>

                <FormPreventivo/>
            </div>


        );
    }
}

export default Preventivo;
