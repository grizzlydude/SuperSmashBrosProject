import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Favorites from './components/Favorites'
import Characters from './components/Characters'

class App extends Component {
  constructor() {
    super()

    this.state = {
      favoriteArr: []
    }
  }


  // saveToFavorites(id){
  //   SmashData.put(`/api/smashdata/${id}`).then((req, res) => {
  //     this.setState({favoriteArr: res.SmashData})
  //   })
  //   console.log(this.state.favoriteArr)
  // }

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
