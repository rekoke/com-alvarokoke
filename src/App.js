import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
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
            social
          </div>
        </div>
      </div>
    );
  }
}

export default App;
