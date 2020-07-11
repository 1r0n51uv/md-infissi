import React, {Component} from 'react';
import WindowFrameCard from "./components/WindowFrameCard";

class WindowFrames extends Component {
    render() {
        return (
            <div>
                <section className="banner_area" data-stellar-background-ratio="0.5">
                    <h2>Serramenti</h2>
                </section>

                <section className="about_us_area about_us_2 row">

                    <div className="container">
                        <div className="row about_row about_us2_pages">

                            <div className="col-md-11 col-md-offset-1 col-xs-offset-1 wow fadeInDownBig">
                                <table className="table-responsive" style={{borderColor: 'white'}}>

                                    <tbody>


                                    <tr>

                                        <td>
                                            {/* FINESTRA PVC */}
                                            <WindowFrameCard
                                                link="/battente_pvc"
                                                title="FINESTRA PVC"
                                                image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2Fimmagine%20FINESTRA%20pvc.png?alt=media&token=362a8763-5f5a-428e-b93f-cbdcd2e6672e"
                                            />
                                        </td>

                                        <td>

                                            {/* FINESTRA ALLUMINO */}
                                            <WindowFrameCard
                                                link="/serramenti/battente_al"
                                                title="FINESTRA ALLUMINIO"
                                                image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2Fimmagine%20FINESTRA%20alluminio.png?alt=media&token=8cdc87f5-49c7-4ec5-9568-7aa0a153a974"
                                            />
                                        </td>


                                        <td>
                                            {/* FINESTRA ALLUMINIO-LEGNO */}
                                            <WindowFrameCard
                                                link="/serramenti/battente_al_le"
                                                title="FINESTRA ALLUMINIO-LEGNO"
                                                image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FImmagine%20FINESTRA%20alluminio-legno.png?alt=media&token=c82d0dd1-37ca-4b08-94db-a03ecf2717b8"
                                            />

                                        </td>


                                    </tr>

                                    <tr>
                                        <td>
                                            {/* SCORREVOLE PVC */}
                                            <WindowFrameCard
                                                link="/serramenti/scorrevoli_pvc"
                                                title="SCORREVOLE PVC"
                                                image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FImmagine1%20scorrevole%20pvc.png?alt=media&token=ec3e8a48-4d0c-4326-82b4-b881d1efe76b"
                                            />
                                        </td>

                                        <td>
                                            {/* SCORREVOLE ALLUMINIO */}
                                            <WindowFrameCard
                                                link="/serramenti/scorrevole_al"
                                                title="SCORREVOLE ALLUMINIO"
                                                image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FImmagine1%20scorrevole%20alluminio.png?alt=media&token=ec8baa7e-25dd-4e1a-814a-2fac2bb27dc8"
                                            />
                                        </td>

                                        <td>
                                            {/* SCORREVOLE ALLUMINIO-LEGNO */}
                                            <WindowFrameCard
                                                title="SCORREVOLE ALLUMINIO-LEGNO"
                                                image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FImmagine%20scorrevole%20alluminio-legno.png?alt=media&token=df289dd6-ab7a-4f12-aa25-f55d7b4d5289"
                                            />

                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            {/* ALZANTE PVC */}
                                            <WindowFrameCard
                                                link="/serramenti/alzante_pvc"
                                                title="ALZANTE PVC"
                                                image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2Fimmagine%20alzante%20pvc.png?alt=media&token=24ca91aa-d1fe-4ec8-aae2-fe9849ca5ea2"

                                            />
                                        </td>

                                        <td>
                                            {/* SCORREVOLE ALLUMINIO */}
                                            <WindowFrameCard
                                                link="/serramenti/alzante_al_le"
                                                title="ALZANTE ALLUMINIO-LEGNO"
                                                image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FImmagine1%20alzante%20alluminio-legno.png?alt=media&token=ef183725-a204-495e-bc91-106adb88c246"

                                            />
                                        </td>

                                        <td>
                                            {/* MINIMALI ALLUMINIO TT*/}
                                            <WindowFrameCard
                                                link="/minimali_TT"
                                                title="MINIMALI ALLUMINIO TT"
                                                image="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2Fimmagine%20FINESTRA%20alluminio.png?alt=media&token=8cdc87f5-49c7-4ec5-9568-7aa0a153a974"
                                            />

                                        </td>
                                    </tr>

                                    <tr>

                                        <td/>



                                    </tr>

                                    </tbody>

                                </table>



                            </div>

                        </div>
                    </div>
                </section>


            </div>
        );
    }
}

export default WindowFrames;
