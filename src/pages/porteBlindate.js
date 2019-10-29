import React, {Component} from 'react';
import porta from '../res/porta.png';
import DoorSlider from "../ui_components/products/doorSlider";
class PorteBlindate extends Component {
    render() {
        return (


            <section className="our_feature_area">
                <div className="container">
                    <div className="tittle wow fadeInUp">
                        <h2>Porte Blindate</h2>
                    </div>
                    <div className="feature_row row text-center">
                        <div className="col-md-6 feature_img">
                            <img src={porta} alt=""/>
                        </div>
                        <div className="col-md-6 feature_content">
                            <div className="subtittle">
                                <h2>Sicurezza e Design</h2>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <a href="#">
                                        <i className="fas fa-link" aria-hidden="true"/>
                                    </a>
                                </div>
                                <div className="media-body">
                                    <a href="#">Classe 3 antieffrazione</a>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        indus-try. Lorem Ipsum has been the industry's standard dummy text ever
                                        since the 1500s</p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <a href="#">
                                        <i className="fas fa-headphones" aria-hidden="true"/>
                                    </a>
                                </div>
                                <div className="media-body">
                                    <a href="#">Abbattimento acustico (30db)</a>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        indus-try. Lorem Ipsum has been the industry's standard dummy text ever
                                        since the 1500s</p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <a href="#">
                                        <i className="fas fa-certificate" aria-hidden="true"/>
                                    </a>
                                </div>
                                <div className="media-body">
                                    <a href="#">Marcatura <em>CE</em></a>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        indus-try. Lorem Ipsum has been the industry's standard dummy text ever
                                        since the 1500s</p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <a href="#">
                                        <i className="fas fa-cog" aria-hidden="true"/>
                                    </a>
                                </div>
                                <div className="media-body">
                                    <a href="#">Trasmittanza termica (U=1,97 W/m² K)</a>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        indus-try. Lorem Ipsum has been the industry's standard dummy text ever
                                        since the 1500s</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <DoorSlider/>
            </section>

        );
    }
}

export default PorteBlindate;
