import React, {Component} from 'react';

class ColourCard extends Component {
    render() {
        return (

                <div className="who_we_area col-md-2 col-xs-4 cardBox2"
                     style={{
                         padding: "2%",
                         borderRadius: "20px"
                     }}>
                    <img
                        style={{marginTop: "5%"}}
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

export default ColourCard;
