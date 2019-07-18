import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import SmashData from './SmashData'

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
      </div>
    );
  }
}

export default App;
