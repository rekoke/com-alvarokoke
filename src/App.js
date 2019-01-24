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
            <span><a href="mailto:rekoke92@gmail.com?Subject=Hello koke" target="_top" onclick="ga('send', 'event', 'mail', 'click', 'home', 0)"><span class="icon-mail"></span><span>emailme</span></a></span>
            <span><a href="https://www.linkedin.com/in/alvaro-de-frutos-cabrero" rel="noopener noreferrer" target="_blank" onclick="ga('send', 'event', 'linkedin', 'click', 'home', 0)"><span class="icon-linkedin"></span><span>linkedIn</span></a></span>
            <span><a href="https://github.com/rekoke" rel="noopener noreferrer" target="_blank" onclick="ga('send', 'event', 'github', 'click', 'home', 0)"><span class="icon-github"></span><span>github</span></a></span>
            <span><a href="https://www.instagram.com/kokensaimada/?hl=es" rel="noopener noreferrer" target="_blank" onclick="ga('send', 'event', 'instagram', 'click', 'home', 0)"><span class="icon-instagram"></span><span>instagram</span></a></span>
            <span><a href="https://codepen.io/rekoke/" rel="noopener noreferrer" target="_blank" onclick="ga('send', 'event', 'codepen', 'click', 'home', 0)"><span class="icon-codepen"></span><span>codepen</span></a></span>
            <span><a href="https://open.spotify.com/user/kokespot?si=v72P6YFwSN6B6tmnHsNMSg" rel="noopener noreferrer" target="_blank" onclick="ga('send', 'event', 'spotify', 'click', 'home', 0)"><span class="icon-spotify"></span><span>spotify</span></a></span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
