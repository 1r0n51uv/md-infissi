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

            <div className="who_we_area col-md-8 col-xs-10 cardBox2"
                 onMouseOver={() => {this.setState({size: '85'})}}
                 onMouseLeave={() => {this.setState({size: '80'})}}
                 onClick={() => { window.location = this.props.link}}
                 style={{
                padding: "5%",
                borderRadius: "20px"
            }}>
                <img
                    style={{marginTop: "5%", width: this.state.size + '%'}}
                    className="img-responsive center-block"
                    src={this.props.image}
                    alt=""/>
                <hr/>
                <div className="panel-title text-center" style={{padding: '5%'}}>
                    <h2 style={{fontSize: '100%', fontFamily: 'Oswald'}}>{this.props.title}</h2>
                </div>

            </div>

        );
    }
}
