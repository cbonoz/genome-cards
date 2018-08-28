import React, { Component } from 'react';
import logo from './assets/genome_cards_invert.png';
import logoNormal from './assets/genome_cards_300.png';
import Home from './components/Home';
import { Button, Modal } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { show } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Play to your Strengths.</p>
        </header>
        <Home />
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome to Genome Cards</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="centered">
              <img src={logoNormal}/>
            </div>
            <div className="login-modal centered">
              <Button className="login-button centered" bsStyle="success" onClick={this.handleClose}>Continue with Genome</Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default App;
