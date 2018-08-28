import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

class GenomeCard extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        const self = this;
        const { scope } = self.props;
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} infinite>
                <div key="front" style={this.props.styles.card}>
                    <img
                        style={this.props.styles.image}
                        src="//www.planwallpaper.com/static/images/02_GpKGIi8.jpg"
                    />

                    <button onClick={this.handleClick}>
                        Flip {scope}
                    </button>
                </div>

                <div key="back" style={this.props.styles.card}>
                    <img
                        style={this.props.styles.image}
                        src="//www.planwallpaper.com/static/images/147083304-dogs-home-alone-all-day-632x475_TeDlBdS.jpg"
                    />

                    <button onClick={this.handleClick}>
                        Flip Back
                    </button>
                </div>
            </ReactCardFlip>
        );
    }

}

export default GenomeCard;