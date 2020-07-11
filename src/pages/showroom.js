import React, {Component} from 'react';
import firebase from "firebase";
import ResponsiveGallery from "react-responsive-gallery";

class Showroom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
        }
    }

    componentDidMount() {
        let ph = [];
        firebase.storage().ref('showroom').listAll().then(res => {
            res.items.map(val => {
                val.getDownloadURL().then(dw => {
                    ph.push({src: dw})
                }).then(() => {
                    this.setState({images: ph, showGallery: true}, () => {
                        //console.log(this.state.images)
                    })
                })
            });
        })
    }

    render() {
        return (
            <div>

                <section className="banner_area" data-stellar-background-ratio="0.5">
                    <h2>Showroom</h2>
                </section>
                <section className="about_us_area about_us_2 row center-block text-center" style={{marginTop: '5%'}}>


                    <div className="container">
                        <ResponsiveGallery useLightBox={true} images={this.state.images}/>

                        </div>

                </section>
            </div>
        );
    }
}

export default Showroom;
