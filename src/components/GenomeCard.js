import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'
import api from './../helpers/api'
import { Button, Modal } from 'react-bootstrap';
import loadingSpinner from './../assets/loading.gif'

class GenomeCard extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
            loading: false,
            report: {},
            show: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClick(event) {
        event.preventDefault();
        const self = this;
        const isFlipped = self.state.isFlipped;

        if (!isFlipped) {
            self.setState({ loading: true });
            const reportName = self.props.scope.split(':')[1];
            api.getReport(reportName).then(resp => {
                console.log('resp', JSON.stringify(resp))
                const data = resp.data;
                console.log('data', data);
                console.log('pheno', data.phenotype)
                self.setState({ loading: false, report: data });
            }).catch(e => {
                console.error('getReport error:', e)
            });
            // If the card wan't flipped make a web-request.
        }
        self.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    formatNameFromScope(scope) {
        const a = scope.split(':')[1].replace("-", " ")
        return a.slice(0, 1).toUpperCase() + a.slice(1)
    }

    render() {
        const self = this;
        const { report, loading, show } = self.state;
        const { scope } = self.props;

        const formattedName = this.formatNameFromScope(scope)
        return (
            <div>
                <ReactCardFlip isFlipped={this.state.isFlipped} infinite>
                    <div key="front" className="cursor"
                        style={this.props.styles.card}
                        onClick={this.handleClick}
                    >
                        <h3 className="centered card-header">{formattedName}</h3>
                        <img
                            style={this.props.styles.image}
                            // src="//www.planwallpaper.com/static/images/02_GpKGIi8.jpg"
                            // src="https://cdn.iconscout.com/icon/premium/png-256-thumb/dna-connection-genetic-genome-helix-strand-structure-41851.png"
                            src="https://www.mendelian.co/img/gene.png"
                            // src="https://cdn.pixabay.com/photo/2017/05/16/02/07/dna-icon-2316641_1280.png"
                            // width={"100"}
                        />

                    </div>

                    <div key="back" style={this.props.styles.card}>
                        {/* <img
                        style={this.props.styles.image}
                        src="//www.planwallpaper.com/static/images/147083304-dogs-home-alone-all-day-632x475_TeDlBdS.jpg"
                    /> */}
                        {loading && <img src={loadingSpinner} className="centered" />}
                        {!loading && report.phenotype && <div className="centered">
                            <h5>{report.phenotype.display_name}</h5>
                            <div>
                                <p><b>Your Score:</b> {report.summary.score}</p>
                                <p><b>Summary:</b> {report.summary.text}</p>

                                <Button bsStyle="success" onClick={this.handleShow}>More Detail</Button>
                            </div>
                        </div>}
                        <br />
                        <button bsStyle="danger" onClick={this.handleClick}>
                            Flip Back
                    </button>
                    </div>
                </ReactCardFlip>
                {report.scores && <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Your Genome Report: {formattedName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><b>Your Genome: {report.summary.score}</b></p>

                        <hh4/>
                        <p>Score Definitions:</p>

                        {self.state.report.scores.map((score, i) => {
                            return <p key={i}><b>Score {score.score}</b>: {score.text}</p>
                        })}
                        <br />
                        <div><span className='red'>Notes:</span><br />
                            {self.state.report.summary && self.state.report.summary.warnings.map((warning, i) => {
                                return <p key={i}>{warning}</p>
                            })}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>}
            </div>
        );
    }

}

export default GenomeCard;