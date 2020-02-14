import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import {Carousel} from "react-responsive-carousel";


class ClientsReviews extends Component {
    render() {
        return (
            <section className="testimonial_area row" style={{backgroundColor: '#D5D5D5'}}>
                <div className="testimonial_carosel">
                    <div className="container">


                        <Carousel
                            autoPlay={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            showStatus={false}
                            dynamicHeight={true}
                            interval={4000}
                            showArrows={true}
                        >

                        </Carousel>

                        <AliceCarousel
                            buttonsDisabled={true}
                            dotsDisabled={true}
                            infinite={true}
                            autoPlayInterval={2000}
                            autoPlay={true}
                            fadeOutAnimation={true}>





                            <div className="item text-center">
                                <div className="media">
                                    <div className="media-body" >
                                        <h4 style={{color: 'black'}} className="media-heading"> </h4>
                                        <h6> </h6>

                                    </div>

                                </div>
                                <i style={{color: 'black'}} className="fas fa-star"/>
                                <i style={{color: 'black'}} className="fas fa-star"/>
                                <i style={{color: 'black'}} className="fas fa-star"/>
                                <i style={{color: 'black'}} className="fas fa-star"/>
                                <i style={{color: 'black'}} className="fas fa-star"/>

                                <p style={{color: 'black'}}><i className="fa fa-quote-right" style={{color: 'black'}} aria-hidden="true"/>At vero eos et accusamus et iusto
                                    odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                                    similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                                    fuga. Et harum quidem rerum facilis est et expedita distinctio<i
                                        className="fa fa-quote-left" style={{color: 'black'}} aria-hidden="true"/></p>
                            </div>
                            <div className="item text-center">
                                <div className="media">
                                    <div className="media-body" >
                                        <h4 style={{color: 'black'}} className="media-heading"> </h4>
                                        <h6> </h6>

                                    </div>

                                </div>
                                <i style={{color: 'black'}} className="fas fa-star"/>
                                <i style={{color: 'black'}} className="fas fa-star"/>
                                <i style={{color: 'black'}} className="fas fa-star"/>
                                <i style={{color: 'black'}} className="fas fa-star"/>
                                <i style={{color: 'black'}} className="fas fa-star"/>

                                <p style={{color: 'black'}}><i className="fa fa-quote-right" style={{color: 'black'}} aria-hidden="true"/>At vero eos et accusamus et iusto
                                    odio dignissimos ducimus qui bhdjn,o<i
                                        className="fa fa-quote-left" style={{color: 'black'}} aria-hidden="true"/></p>
                            </div>




                        </AliceCarousel>





                    </div>


                </div>

            </section>
        );
    }
}

export default ClientsReviews;
