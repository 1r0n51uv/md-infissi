import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default header_aera" id="main_navbar" style={{backgroundColor: '#D0D0D2'}}>
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

                                    src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/Schermata%202020-06-03%20alle%2022.44.41.png?alt=media&token=002a9406-d717-4a78-8323-dd23b5e9acbd"
                                    alt=""
                                    className="img-responsive"
                                    style={{width: '50%'}}
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

                                    <Link className="dropdown-toggle" data-toggle="dropdown" to="#">Prodotti</Link>

                                    <ul className="dropdown-menu other_dropdwn">
                                        <li>
                                            <Link to="/prodotti/serramenti">Serramenti</Link>
                                        </li>
                                        <li>
                                            <Link to="/prodotti/porteblindate">Porte blindate</Link>
                                        </li>
                                        <li>
                                            <Link to="/zanzariere">Zanzariere</Link>
                                        </li>
                                        <li>
                                            <Link to="/facciateContinue">Facciate Continue</Link>
                                        </li>
                                        <li>
                                            <Link to="/pergolaBioClimatica">Pergola Bioclimatica</Link>
                                        </li>

                                    </ul>
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
