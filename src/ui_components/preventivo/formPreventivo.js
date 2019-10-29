import React, {Component} from 'react';
import FormUserInfo from "./formUserInfo";
import FormInfissi from "./formInfissi";
import Subtotal from "./subtotal";

class FormPreventivo extends Component {
    render() {
        return (
            <section className="all_contact_info">
                <div className="container">
                    <div className="row contact_row">

                        <div className="col-sm-7 contact_info send_message">

                            <form className="form-inline contact_box">

                                <FormInfissi/>


                                <div style={{width: '100%', backgroundColor: '#f6b60b', height: '25px', marginBottom: '3%'}}>

                                </div>

                                <FormUserInfo/>


                            </form>
                        </div>

                        <Subtotal/>
                    </div>
                </div>
            </section>
        );
    }
}

export default FormPreventivo;
