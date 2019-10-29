import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "../pages/home";
import About from "../pages/about";
import Navbar from "../ui_components/navbar";
import Azienda from "../pages/azienda";
import Contacts from "../pages/contacts";
import Lavoraconoi from "../pages/lavoraconoi";
import Preventivo from "../pages/preventivo";
import Pvc from "../pages/PVC";
import PorteBlindate from "../pages/porteBlindate";

class Myrouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                    <Route path="/home" component={Home}/>
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About}/>
                    <Route path="/azienda" component={Azienda}/>
                    <Route path="/contatti" component={Contacts}/>
                    <Route path="/lavoraconoi" component={Lavoraconoi}/>
                    <Route path="/preventivo" component={Preventivo}/>
                    <Route path="/prodotti/pvc" component={Pvc}/>
                    <Route path="/prodotti/porte" component={PorteBlindate}/>
                </div>
            </Router>

        );
    }
}

export default Myrouter;
