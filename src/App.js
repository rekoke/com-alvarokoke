import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import {SOCIAL_NETWORKS} from './constants.js';
import firebase from './Firebase.js'  
ReactGA.initialize('UA-133167935-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  constructor(){
    super();
    this.database = firebase.database().ref().child('name');
    this.state = {
      name: 'alvaro'
    }
  }

  componentDidMount(){
    this.database.on('value', snap => {
      this.setState({
        name: snap.val()
      });
    });
  }

  render() {
    const links = SOCIAL_NETWORKS.map((network) => (
      <span>
        <a
          href={network.url}
          target={network.target || '_blank'}
          onClick={() => ReactGA.ga('send', 'event', `${network.text}`, 'click', 'home', 0)}
        >
          <span className={network.icon}></span>
          <span>{network.text}</span>
        </a>
      </span>
    ));

    return (
      <div className="App">
        <div className="App__container">
          <div className="App__container__left">
            <div className="App__container__left__name">
              <div className="App__container__left__name__up">
                {this.state.name}
              </div>
              <div className="App__container__left__name__down">
                <span>k</span>
                <span>o</span>
                <span>k</span>
                <span>e</span>
              </div>
            </div>
            <div className="App__container__left__description">
              frontend and UX/UI
            </div>
          </div>
          <div className="App__container__right">
            {links}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
