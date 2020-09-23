import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "../pages/home";
import About from "../pages/about";
import Navbar from "../ui_components/navbar";
import Azienda from "../pages/azienda";
import Contacts from "../pages/contacts";
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
import FacciateContinue from "../ui_components/products/facciateContinue/facciateContinue";
import BattenteAlLegn from "../ui_components/products/window_frames/subPages/alluminioLegno/battenteAL_Legn";
import AlzanteAlLegn from "../ui_components/products/window_frames/subPages/alluminioLegno/alzanteAL_Legn";
import Bilaterale from "../ui_components/products/zanzariere/bilaterale";
import Laterale from "../ui_components/products/zanzariere/laterale";
import Scorrevole from "../ui_components/products/zanzariere/scorrevole";
import Verticale from "../ui_components/products/zanzariere/verticale";
import FcContStru from "../ui_components/products/facciateContinue/fcContStru";
import FcMontTrav from "../ui_components/products/facciateContinue/fcMontTrav";
import FcStruttMecc from "../ui_components/products/facciateContinue/fcStruttMecc";
import MinimaliHome from "../ui_components/products/minmaliTT/minimaliHome";
import EkuStrutturale from "../ui_components/products/minmaliTT/ekuStrutturale";
import EkuSlide from "../ui_components/products/minmaliTT/ekuSlide";
import Maxvision from "../ui_components/products/minmaliTT/maxvision";
import Md68 from "../ui_components/products/window_frames/subPages/pvc/battentePVC/md68";
import Md80 from "../ui_components/products/window_frames/subPages/pvc/battentePVC/md80";
import S8000 from "../ui_components/products/window_frames/subPages/pvc/battentePVC/s8000";
import Showroom from "../pages/showroom";
import Admin from "../pages/admin";



class Myrouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route path="/home" component={Home}/>
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About}/>
                    <Route path="/azienda" component={Azienda}/>
                    <Route path="/contatti" component={Contacts}/>


                    <Route exact path="/prodotti/porteblindate" component={SecurityDoor}/>

                    <Route exact path="/zanzariere" component={Zanzariere}/>
                    <Route path="/zanzariere/bilaterale" component={Bilaterale}/>
                    <Route path="/zanzariere/laterale" component={Laterale}/>
                    <Route path="/zanzariere/scorrevole" component={Scorrevole}/>
                    <Route path="/zanzariere/verticale" component={Verticale}/>

                    <Route exact path="/pergolaBioClimatica" component={PergolaClimatica}/>

                    <Route exact path="/facciateContinue" component={FacciateContinue}/>
                    <Route path="/facciateContinue/strutturaleMeccanica" component={FcStruttMecc}/>
                    <Route path="/facciateContinue/montanteTraversi" component={FcMontTrav}/>
                    <Route path="/facciateContinue/continuaStrutturale" component={FcContStru}/>

                    <Route path="/prodotti/serramenti" component={WindowFrames}/>
                    <Route exact path="/serramenti" component={WindowFrames}/>

                    <Route path="/serramenti/scorrevoli_pvc" component={ScorrevolePvc}/>
                    <Route path="/serramenti/alzante_pvc" component={AlzantePvc}/>

                    <Route path="/serramenti/battente_al_le" component={BattenteAlLegn}/>
                    <Route path="/serramenti/alzante_al_le" component={AlzanteAlLegn}/>

                    <Route path="/serramenti/battente_al" component={BattenteAl}/>
                    <Route path="/serramenti/scorrevole_al" component={ScorrevoleAl}/>

                    <Route exact path="/minimali_TT" component={MinimaliHome}/>
                    <Route path="/minimali_TT/ekuPerfectionStrutturale" component={EkuStrutturale}/>
                    <Route path="/minimali_TT/ekuPerfectionSlide" component={EkuSlide}/>
                    <Route path="/minimali_TT/maxvision" component={Maxvision}/>

                    <Route exact path="/battente_pvc" component={BattentePvc}/>
                    <Route path="/battente_pvc/md68" component={Md68}/>
                    <Route path="/battente_pvc/md80" component={Md80}/>
                    <Route path="/battente_pvc/s8000" component={S8000}/>

                    <Route path="/showroom" component={Showroom} />

                    <Route path="/admin" component={Admin} />


                    <Footer/>
                </div>
            </Router>

        );
    }
}

export default Myrouter;
