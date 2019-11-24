import React, {Component} from 'react';

class ColourCard extends Component {
    render() {
        return (

                <div className="who_we_area col-md-10 col-xs-12"
                     style={{
                         padding: "5%",
                         borderRadius: "20px"
                     }}>
                    <img
                        style={{marginTop: "5%"}}
                        className="img-responsive center-block"
                        src={this.props.image}
                        alt=""/>
                    <hr/>
                    <div className="panel-title">
                        <h4 style={{fontFamily: 'Oswald'}}>{this.props.title}</h4>
                    </div>

                </div>

        );
    }
}

export default ColourCard;
