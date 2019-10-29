import React, {Component} from 'react';

class FormInfissi extends Component {
    render() {
        return (
            <div>
                <h2 style={{marginBottom: '3%'}}>Send Us a Message</h2>

                <input type="text" className="form-control input_box"
                       placeholder="Last Name *"/>

                <div className="dropdown" style={{marginBottom: '3%'}}>
                    <button className="btn btn-default" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div className="dropdown-menu row" style={{backgroundColor: '#f6b60b'}} aria-labelledby="dropdownMenuButton">
                        <div className="col-md-12 text-center">
                            <button className="btn btn-default">Action</button>
                        </div>
                        <div className="col-md-12 text-center">
                            <button className="btn btn-default">Action</button>
                        </div>
                        <div className="col-md-12 text-center">
                            <button className="btn btn-default">Action</button>
                        </div>



                    </div>
                </div>
            </div>
        );
    }
}

export default FormInfissi;
