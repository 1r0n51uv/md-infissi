import React, {Component} from 'react';
import Modal from 'react-responsive-modal';


class SinglePanelDoorSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            img: ''
        }
    }

    onOpenModal(porta) {
        this.setState({ open: true, img: porta });
    };

    onCloseModal = () => {
        this.setState({ open: false, img: '' });
    };

    render() {
        return (

                <div>
                    <img src={this.props.img} onClick={() => {
                        this.onOpenModal(this.props.img)
                    }} width="40%" style={{paddingTop: '8%'}} alt=""/>
                    <Modal open={this.state.open} onClose={this.onCloseModal} center>
                        <div className="text-center center-block" style={{width: '60%'}}>
                            <img src={this.state.img} className="img-responsive" alt=""/>
                            <p>{this.props.code}</p>
                        </div>

                    </Modal>
                </div>
        );
    }
}

export default SinglePanelDoorSlider;
