import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "../pages/home";
import About from "../pages/about";
import Navbar from "../ui_components/navbar";
import Azienda from "../pages/azienda";
import Contacts from "../pages/contacts";
import Lavoraconoi from "../pages/lavoraconoi";
import Preventivo from "../pages/preventivo";
import Prodotti from "../pages/Prodotti";
import Footer from "../ui_components/footer";
import WindowFrames from "../ui_components/products/window_frames/windowFrames";
import ScorrevolePvc from "../ui_components/products/window_frames/subPages/pvc/scorrevolePVC";
import BattentePvc from "../ui_components/products/window_frames/subPages/pvc/battentePVC";
import AlzantePvc from "../ui_components/products/window_frames/subPages/pvc/alzantePVC";
import BattenteAl from "../ui_components/products/window_frames/subPages/alluminio/battenteAL";
import ScorrevoleAl from "../ui_components/products/window_frames/subPages/alluminio/scorrevoleAl";
import SecurityDoor from "../ui_components/products/securityDoors";
import Zanzariere from "../ui_components/products/zanzariere/zanzariere";
import PergolaClimatica from "../ui_components/products/pergolaClimatica/pergolaClimatica";


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

                    <Route exact path="/prodotti" component={Prodotti}/>

                    <Route exact path="/prodotti/porteblindate" component={SecurityDoor}/>

                    <Route exact path="/prodotti/zanzariere" component={Zanzariere}/>

                    <Route exact path="/prodotti/pergolaBioClimatica" component={PergolaClimatica}/>

                    <Route path="/prodotti/serramenti" component={WindowFrames}/>
                    <Route exact path="/serramenti" component={WindowFrames}/>

                    <Route path="/serramenti/scorrevoli_pvc" component={ScorrevolePvc}/>
                    <Route path="/serramenti/battente_pvc" component={BattentePvc}/>
                    <Route path="/serramenti/alzante_pvc" component={AlzantePvc}/>

                    <Route path="/serramenti/battente_al" component={BattenteAl}/>
                    <Route path="/serramenti/scorrevole_al" component={ScorrevoleAl}/>

                    <Footer/>
                </div>
            </Router>

        );
    }
}

export default Myrouter;
