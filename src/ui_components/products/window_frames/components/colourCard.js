import React, {Component} from 'react';
import Modal from "react-responsive-modal";

class ColourCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            image: ''
        }
    }


    onOpenModal(porta) {
        this.setState({ open: true, image: porta });
    };

    onCloseModal = () => {
        this.setState({ open: false, image: '' });
    };
    render() {
        return (

            <div>
                <div className="who_we_area col-md-10 col-xs-12"
                     style={{
                         padding: "5%",
                         borderRadius: "20px"
                     }}>
                    <img
                        onClick={() => {
                            this.onOpenModal(this.props.image)
                        }}
                        style={{marginTop: "5%"}}
                        className="img-responsive center-block"
                        src={this.props.image}
                        alt=""/>
                    <hr/>
                    <div className="panel-title">
                        <h4 style={{fontFamily: 'Oswald'}}>{this.props.title}</h4>
                    </div>

                </div>

                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <div className="text-center center-block" style={{width: '80%'}}>
                        <img src={this.state.image} className="img-responsive" alt=""/>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ColourCard;
