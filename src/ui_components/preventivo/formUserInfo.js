import React, {Component} from 'react';

class FormUserInfo extends Component {
    render() {
        return (
            <div>
                <h2 style={{marginBottom: '3%'}}>Le tue info</h2>
                <input type="text" className="form-control input_box"
                       placeholder="Nome"/>

                <input type="text" className="form-control input_box"
                       placeholder="Cognome"/>

                <input type="email" className="form-control input_box"
                       placeholder="Email"/>


            </div>
        );
    }
}

export default FormUserInfo;
