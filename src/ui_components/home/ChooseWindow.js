import React, {Component} from 'react';

class ChooseWindow extends Component {
    render() {
        return (
            <div>

                <section className="our_services_tow">
                    <div className="container">
                        <div className="tittle wow fadeInUp">
                            <h2>Scegli il tuo infisso</h2>
                        </div>
                        <div className="architecture_area services_pages">
                            <div className="portfolio_item portfolio_2">
                                <div className="single_facilities col-sm-5 painting webdesign">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/home%2Finfissi_pvc-2.jpg?alt=media&token=f6ec4ab3-646b-4513-9f3a-5fcea2e530f2" alt=""/>
                                </div>
                                <div className="grid-sizer-2"></div>
                                <div className="single_facilities col-sm-7 painting building painting adversting">
                                    <div className="who_we_area text-left" style={{border: '4px #F6B632 solid', padding: '5%', marginTop: '10%', lineHeight: '20px'}}>
                                        <h2>I nostri sistemi in pvc sono in grado di soddisfare qualsiasi esigenza con alte
                                            prestazioni acustiche e termiche. <br/> <b>Il suo punto di forza? </b> <br/> <h2 style={{textDecoration: 'underline'}}>Rapporto qualità-prezzo </h2> </h2>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default ChooseWindow;
