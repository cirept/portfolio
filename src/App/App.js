import React, { Component } from 'react';
import { Button } from 'reactstrap';

import logo from '../logo.svg';
import './App.css';

import NavBar from '../NavBar/NavBar';

class App extends Component {

componentWillMount(){
  document.title = 'Eric Tanaka Portfolio';
}

  render() {
    return (
      <div className="App container-fluid">
        <header className="App-header container-fluid">
          <NavBar />
        </header>
        <main>
          <div className="row align-items-center">
            <div className="col-sm-4">
              <img className="img-fluid" src="http://via.placeholder.com/500x500"/>
            </div>
            <div className="col-sm-8">
              <h1>Hello there, I am Eric Tanaka.</h1>
              <p>I like to code.</p>
            </div>
          </div>
          <section className="container-fluid bg-dark">
            <div className="row">
              <div className="col text-light">JS</div>
              <div className="col text-light">jQuery</div>
              <div className="col text-light">HTML</div>
              <div className="col text-light">CSS</div>
              <div className="col text-light">Photoshop</div>
              <div className="col text-light">React</div>
              <div className="col text-light">Git</div>
            </div>
            <div className="row">
              <div className="col text-light">JS</div>
              <div className="col text-light">jQuery</div>
              <div className="col text-light">HTML</div>
              <div className="col text-light">CSS</div>
              <div className="col text-light">Photoshop</div>
              <div className="col text-light">React</div>
              <div className="col text-light">Git</div>
            </div>
          </section>
        </main>
        <footer className="container-fluid fixed-bottom text-light bg-dark">
          My Footer
        </footer>
      </div>
    );
  }
}

export default App;
