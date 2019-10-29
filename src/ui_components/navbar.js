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

                            <a className="navbar-brand" href="/home"><img src="images/logo.png" alt=""/>MDINFISSI</a>
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

                                    <Link className="dropdown-toggle" data-toggle="dropdown" to="prodotti">Prodotti</Link>

                                    <ul className="dropdown-menu other_dropdwn">
                                        <li>
                                            <Link to="/prodotti/pvc">PVC</Link>
                                        </li>
                                        <li>
                                            <Link to="/prodotti/alluminiolegno">Alluminio-Legno</Link>
                                        </li>
                                        <li>
                                            <Link to="/prodotti/grate">Grate in ferro</Link>
                                        </li>
                                        <li>
                                            <Link to="/prodotti/porte">Porte Blindate</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="dropdown submenu">
                                    <a href="#/" className="dropdown-toggle" data-toggle="dropdown">Preventivo online</a>
                                    <ul className="dropdown-menu other_dropdwn" style={{marginRight: '-30%'}}>
                                        <li>
                                            <Link to="/preventivo">PVC</Link>
                                        </li>
                                        <li>
                                            <Link to="/preventivo">Alluminio-Legno</Link>
                                        </li>

                                    </ul>
                                </li>

                                <li>
                                    <Link to="/lavoraconoi">Lavora con noi</Link>
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
