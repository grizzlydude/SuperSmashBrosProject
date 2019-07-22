import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Favorites from './components/Favorites'
import Characters from './components/Characters'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="mainBody">
          <div className='randomCharacter'>
            <Characters />
          </div>
          <div className='favorites'>
            <Favorites />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
