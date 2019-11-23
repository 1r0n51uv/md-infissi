import React, {Component} from 'react';

export default class WindowFrameCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: '80'
        }
    }

    render() {
        return (

            <div className="who_we_area col-md-3 col-xs-5 cardBox2"
                 onMouseOver={() => {this.setState({size: '85'})}}
                 onMouseLeave={() => {this.setState({size: '80'})}}
                 style={{
                padding: "2%",
                borderRadius: "20px"
            }}>
                <img
                    style={{marginTop: "5%", width: this.state.size + '%'}}
                    className="img-responsive center-block"
                    src={this.props.image}
                    alt=""/>
                <hr/>
                <div className="subtittle">
                    <h2 style={{fontSize: '150%'}}>{this.props.title}</h2>
                </div>

            </div>

        );
    }
}
