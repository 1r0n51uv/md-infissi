import React, {Component} from 'react';
import HomeSlider from "../ui_components/home/home_slider";
import ClientsReviews from "../ui_components/home/clientsReviews";
import ChooseWindow from "../ui_components/home/ChooseWindow";

class Home extends Component {
    render() {
        return (
            <div>


                <HomeSlider/>

                {
                //    <ClientsReviews/>
                }

                <ChooseWindow/>

            </div>

        );
    }
}

export default Home;
