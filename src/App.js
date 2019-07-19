import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import SmashData from './SmashData'
import Favorites from './components/Favorites'
// import CharacterDisplay from './components/CharacterDisplay'


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
        <Favorites character={SmashData}/>
      </div>
    );
  }
}

export default App;
