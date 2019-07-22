import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
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
        <Header />
        <Characters />
        <Favorites />
      </div>
    );
  }
}

export default App;
