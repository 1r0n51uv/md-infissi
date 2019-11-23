import React, {Component} from 'react';

class Azienda extends Component {

    render() {
        return (
          <div>
              <section className="banner_area" data-stellar-background-ratio="0.5">
                  <h2>La nostra azienda</h2>
              </section>
              <section className="about_us_area about_us_2 row">
                  <div className="container">
                      <div className="row about_row about_us2_pages">
                          <div className="who_we_area col-md-6 cardBox2" style={{paddingTop: '5%', paddingLeft: '5%', paddingRight: '5%', borderRadius: '20px'}}>
                              <div className="subtittle">
                                  <h2>Chi siamo</h2>
                              </div>
                              <div style={{borderBottom: '3px #f6b60b solid'}}>
                                  <p style={{fontSize: '150%'}}><b>Minichini Infissi srl</b> nasce come realtà artigianale nel 1987 ad opera del Sig. Minichini Carmine,
                                      impresa che progetta e realizza infissi in <b>ALLUMINIO-ALLUMINIO/LEGNO-PVC</b>. La gamma di prodotti
                                      da noi offerti è studiata per rispondere alle esigenze più disparate di un mercato in costante
                                      crescita e sviluppo.</p>
                              </div>

                              <div style={{borderBottom: '3px #f6b60b solid'}}>
                                  <p style={{fontSize: '150%'}}>La realizzazione delle finestre si svolge con macchinari ad
                                      <b>alta tecnologia</b>, dove ogni fase è monitorata e controllata da manodopera specializzata.
                                      I prodotti di alta qualità, la puntalità nelle consegne, la flessibilità produttiva nonchè il
                                      rapporto umano con ogni singolo cliente ci consentono di differenziarci dalle altre aziende </p>
                              </div>

                              <div>
                                  <p style={{fontSize: '150%'}}>Scegliere un serramento Minichini Infissi significa
                                      affidarsi a un’azienda produttiva che dal preventivo alla posa in opera si
                                      prende cura del prodotto avendo come unico obiettivo la soddisfazione del cliente </p>
                              </div>



                          </div>
                          <div className="col-md-5 col-md-offset-1 about_client about_pages_client">
                              <img
                                  style={{marginTop: '5%'}}
                                  className="cardBox2"
                                  src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/home%2Fscheda%20tecnica%20fc68tt.PNG?alt=media&token=a7ef9d7c-21e8-43ba-92b1-a087021218eb" alt=""/>


                          </div>
                      </div>
                  </div>
              </section>
          </div>
        );
    }
}

export default Azienda;
