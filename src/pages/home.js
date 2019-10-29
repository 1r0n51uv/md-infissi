import React, {Component} from 'react';
import HomeSlider from "../ui_components/home/home_slider";
import ClientsReviews from "../ui_components/home/clientsReviews";

class Home extends Component {
    render() {
        return (
            <div>


                <HomeSlider/>
                <ClientsReviews/>


            </div>

        );
    }
}

export default Home;