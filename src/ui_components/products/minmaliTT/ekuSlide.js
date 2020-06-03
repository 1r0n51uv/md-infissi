import React, {Component} from 'react';
import Gallery from "react-photo-gallery";

const photos = [
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FMinimaliTT%2Fekuslide%2FSene3za%20titolo.png?alt=media&token=51f9b48f-0a8a-4bfa-b004-ab432c7e55eb',
        width: 4,
        height: 3
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FMinimaliTT%2Fekuslide%2Fe3%20titolo.png?alt=media&token=c729e1af-bd91-4623-8ee7-e1b9d95fbc5e',
        width: 4,
        height: 3
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FMinimaliTT%2Fekuslide%2Fe3.png?alt=media&token=5741be28-1fce-4c1c-9fcd-0f5f84728ed4',
        width: 1,
        height: 1
    }
];

class EkuSlide extends Component {
    render() {
        return (
            <div>
                <section className="about_us_area about_us_2 row">

                    <div className="container" style={{marginTop: '5%'}}>

                        <div className="tittle wow fadeInUp">
                            <h1 style={{fontFamily: 'Oswald'}}>EKU PERFECTION SLIDE</h1>
                        </div>

                        <div className="row about_row about_us2_pages center-block">

                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12 center-block">

                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FMinimaliTT%2Fekuslide%2FE%20titolo.png?alt=media&token=427c353c-8200-4f1d-ac9b-dd6fa07adae1"
                                            className="img-responsive"
                                            alt=""/>
                                    </div>


                                    <div className="col-md-12">
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FMinimaliTT%2Fekuslide%2FSen32za%20titolo.png?alt=media&token=41759802-2dbe-4b4a-901c-00c44dfd8aec"
                                            className="img-responsive"
                                            alt=""/>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6 wow fadeInLeft">

                                <hr/>

                                <h4><b>PRESTAZIONI:</b></h4>

                                <h4 style={{marginTop: '1%'}}>Scorrevole a 2 ante, 3.000 x 2.500 mm, con vetrocamera Ug pari a 0,6 W/m2K, Psi 0,05 W/mK</h4>

                                <hr/>

                                <h4 style={{marginTop: '1%'}}><b>Trasmittanza termica:</b> Uw = 1,12 W/m2K con telaio in vista </h4>
                                <h4 style={{marginTop: '1%'}}><b>Trasmittanza termica:</b> Uw = 0,84 W/m2K con telaio  </h4>
                                <h4 style={{marginTop: '1%'}}><b>Permeabilità all’aria:</b> Classe 4  </h4>
                                <h4 style={{marginTop: '1%'}}><b>Tenuta all’acqua:</b> Classe 8A   </h4>
                                <h4 style={{marginTop: '1%'}}><b>Resistenza al carico di vento:</b> Classe C4 </h4>


                                <hr/>

                            </div>




                            <div className="col-md-12 center-block" style={{marginTop: '5%'}}>

                                <h4><b>NUOVA SOGLIA RIBASSATA PER EKU PERFEKTION SLIDE</b></h4>
                                <br/>

                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FMinimaliTT%2Fekuslide%2Ffsa%20titolo.png?alt=media&token=1532053a-5d00-4973-9dd6-8649f15ba7b6"
                                    className="img-responsive"
                                    alt=""/>
                            </div>


                            <div className="col-md-4 center-block" style={{marginTop: '5%'}}>
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/mdinfissi-dd57c.appspot.com/o/products%2Fserramenti%2FMinimaliTT%2Fekuslide%2FSenzawffe%20titolo.png?alt=media&token=25b11eda-b825-4e3b-a6b9-1a0c07be4441"
                                    className="img-responsive"
                                    alt=""/>

                            </div>

                            <div className="col-md-8" style={{marginTop: '5%'}}>
                                <h4>Con la nuova soglia ribassata si mantengono <b>intatte le prestazioni.</b></h4>
                                <h4>Un passaggio agevole tra esterno e interno ora sarà possibile anche nei casi di ristrutturazione in cui non si può intervenire sul pavimento e incassare la soglia. L’Ufficio tecnico di Eku ha messo a punto una <b>nuova soglia ribassata</b>, alta solo 25 mm, che offre un ingombro estremamente ridotto e <b>rispetta il limite previsto dalla normativa sulle barriere architettoniche</b>. L’altezza della cava dove scorrono i carrelli, inoltre, è di soli 9 mm, quindi sensibilmente ridotta rispetto al telaio classico.
                                    È stato necessario studiare anche un <b>nuovo sistema di drenaggio</b> inserendo uno speciale scivolo sotto il telaio che, tramite asole esterne e boccole con valvola interne, permette un’agevole evacuazione dell’acqua.Rimane comunque la <b>possibilità di incassare la soglia e in questo caso la cava è praticamente impercettibile</b> e non crea problemi se calpestata durante il passaggio.
                                </h4>

                            </div>



                            <div className="col-md-12" style={{marginTop: '5%'}}>
                                <h4><b>REALIZZAZIONI: </b></h4>
                                <br/>


                                <Gallery photos={photos} />

                            </div>


                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default EkuSlide;
