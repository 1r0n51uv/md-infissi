import React, {Component} from 'react';
import ShowroomEditor from "../ui_components/showroomEditor";
import Modal from "react-responsive-modal";
require('dotenv').config();

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            pass: "",

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.pass === process.env.REACT_APP_LOGIN_PASS) {
            this.setState({logged: true})
        }
    }

    render() {
        return (

            this.state.logged ? (<ShowroomEditor />) : (    <div>

                <section className="banner_area" data-stellar-background-ratio="0.5">
                    <h2>Pannello Amministratore</h2>
                </section>

                <section className="about_us_area about_us_2 row center-block text-center">

                    <div className="col-md-12 center-block text-center" style={{marginTop: '5%', marginBottom: '5%'}}>

                        <div className="row center-block text-center">

                            <div className="col-md-4 col-sm-4 center-block text-center col-md-push-4 col-sm-push-4">

                                <form onSubmit={this.handleSubmit}>

                                    <label htmlFor="pass" className="form-group">Password </label>
                                    <input type="password" name="pass" placeholder="Inserisci Password" value={this.state.pass} onChange={this.handleChange} className="form-control col-md-6"/>

                                    <button type="submit" style={{marginTop: "2%"}} className="form-control btn btn-info">Login</button>
                                </form>
                            </div>

                        </div>

                    </div>

                </section>

            </div>)


        );
    }
}

export default Admin;
