import React, {Component} from 'react';
import Pvc from "./PVC";
import PorteBlindate from "./porteBlindate";

class Prodotti extends Component {
    render() {
        return (
            <div>
                <Pvc/>
                <PorteBlindate/>
            </div>
        );
    }
}

export default Prodotti;
