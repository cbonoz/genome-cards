import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'
import api from './../helpers/api'

class GenomeCard extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
            loading: false,
            report: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        const self = this;
        const isFlipped = self.state.isFlipped;

        if (!isFlipped) {
            self.setState({ loading: true });
            const reportName = self.props.scope.split(':')[1];
            api.getReport(reportName).then(data => {
                console.log('data', data);
                self.setState({ loading: false, report: data });
            }).catch(e => {
                console.error('getReport error:', e)
            });
            // If the card wan't flipped make a web-request.
        }
        self.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    formatNameFromScope(scope) {
        const a =scope.split(':')[1].replace("-", " ")
        return a.slice(0,1).toUpperCase()+a.slice(1)
    }

    render() {
        const self = this;
        const { report } = self.state;
        const { scope } = self.props;
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} infinite>
                <div key="front" className="cursor"
                    style={this.props.styles.card}
                    onClick={this.handleClick}
                    >
                    <h3>{this.formatNameFromScope(scope)}</h3>
                    <img
                        style={this.props.styles.image}
                        src="//www.planwallpaper.com/static/images/02_GpKGIi8.jpg"
                    />

                </div>

                <div key="back" style={this.props.styles.card}>
                    {/* <img
                        style={this.props.styles.image}
                        src="//www.planwallpaper.com/static/images/147083304-dogs-home-alone-all-day-632x475_TeDlBdS.jpg"
                    /> */}
                    <div>{JSON.stringify(report)}</div>
                    <br/>
                    <button onClick={this.handleClick}>
                        Flip Back
                    </button>
                </div>
            </ReactCardFlip>
        );
    }

}

export default GenomeCard;