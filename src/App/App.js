import React, { Component } from 'react';
import { Button } from 'reactstrap';

import logo from '../logo.svg';
import './App.css';

import NavBar from '../NavBar/NavBar';
import Jumbotron from '../Components/Jumbotron/Jumbotron';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

library.add(far, fab, faCircle);

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

        <main className="row">
          <div className="col-sm-1"></div>
          <div className="col">
            <div className="row">

              <section>
                <div className="row align-items-center">
                <div className="col-sm-4">
                  <img className="img-fluid" src="http://via.placeholder.com/500x500"/>
                </div>
                <div className="col-sm-8">
                  <Jumbotron classes={"my-auto"} h1={"Hello there, I'm Eric Tanaka.  A Web Developer.  =]"} leadMessage={"Highly technical and a team player with a passion for taking over the world with JavaScript."} message={"Prototyped numerous workflow tools that have resulted in workflow changes saving 100+ work hours per month for company staff.  Continuously learning and applying new technologies to current flows for productivity and accuracy."} />
                  Favorite Food: <FontAwesomeIcon icon="stroopwafel" />
                </div>
              </div>
              </section>

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
                  <div className="col text-light">
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon={['far', 'circle']} className="text-light"/>
                  </div>
                  <div className="col text-light">                    
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon={['far', 'circle']} className="text-light"/>
                  </div>
                  <div className="col text-light">                    
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon={['far', 'circle']} className="text-light"/>
                  </div>
                  <div className="col text-light">                    
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon={['far', 'circle']} className="text-light"/>
                  </div>
                  <div className="col text-light">                    
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon={['far', 'circle']} className="text-light"/>
                    <FontAwesomeIcon icon={['far', 'circle']} className="text-light"/>
                  </div>
                  <div className="col text-light">                    
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon={['far', 'circle']} className="text-light"/>
                    <FontAwesomeIcon icon={['far', 'circle']} className="text-light"/>
                    <FontAwesomeIcon icon={['far', 'circle']} className="text-light"/>
                  </div>
                  <div className="col text-light">                    
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon="circle" className="text-light"/>
                    <FontAwesomeIcon icon={['far', 'circle']} className="text-light"/>
                    <FontAwesomeIcon icon={['far', 'circle']} className="text-light"/>
                    <FontAwesomeIcon icon={['far', 'circle']} className="text-light"/>
                  </div>
                </div>
              </section>
              
            </div>
          </div>
          <div className="col-sm-1"></div>
        </main>

        <footer className="container-fluid fixed-bottom text-light bg-dark">
          My Footer
        </footer>

      </div>
    );
  }
}

export default App;



          // <div className="col"></div>
          // <div className="col-sm-8">

          //  <div className="col"></div>