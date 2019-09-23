import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import { SOCIAL_NETWORKS } from './constants.js';
import db from './Firebase.js'  
ReactGA.initialize('UA-133167935-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  constructor(){
    super();
    this.state = {
      footer: []
    }
  }

  componentDidMount() {
    db.collection('home').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        this.setState({ footer: change.doc.data().footer });
      })
    });
  }

  render() {
    const footerLocation = this.state.footer;
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
                alvaro
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
          {
            footerLocation.length > 0 &&
              <div className="App__container__down">
              made with love in {this.state.footer}
              </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
