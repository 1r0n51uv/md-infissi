import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default header_aera" id="main_navbar">
                <div className="container">

                    <div className="col-md-2 p0">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#min_navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>

                            <a className="navbar-brand" href="index.html">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/logo%20minichini%20infissi.PNG?alt=media&token=1898be84-0538-4197-b003-cf68de944c56"
                                    alt=""
                                />
                            </a>

                        </div>
                    </div>

                    <div className="col-md-10 p0">
                        <div className="collapse navbar-collapse" id="min_navbar">
                            <ul className="nav navbar-nav navbar-right">


                                <li>
                                    <Link to="/home">Home</Link>
                                </li>

                                <li>
                                    <Link to="/azienda">Azienda</Link>
                                </li>


                                <li className="dropdown submenu">

                                    <Link to="/prodotti">Prodotti</Link>

                                </li>

                                <li>
                                    <Link to="/contatti">Contatti</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
