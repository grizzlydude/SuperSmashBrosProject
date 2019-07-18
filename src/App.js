import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
// import SmashData from './SmashData'
import Characters from './components/Characters'


class App extends Component {
  constructor(){
    super()

    this.state = {
      favoriteArr: []
    }
  }
  render (){

    return (
      <div className="App">
        <Header />
        <Characters />
      </div>
    );
  }
}

export default App;
