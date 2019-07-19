
import React, { Component } from "react";
import CharacterDisplay from './CharacterDisplay'
import Create from './Create'
import SmashData from '../SmashData'

// This file will handle Displaying Characters for both
// CharacterDisplay.js and Favorites.js

export default class Favorites extends Component {
    constructor() {
        super()

        this.state = {
            characterArrIndex: 0,
            favoriteArr: []
        }
    }

    saveToFavorites(id) {
        // let data = SmashData
        // data.put(`/api/smashdata/${id}`).then((req, res) => {
        //   this.setState({favoriteArr: res.SmashData})
        // })
        return console.log(this.state.favoriteArr)
    }

    createCharacter() {
        this.setState({
        })
        return console.log(SmashData)
    }

    render() {
        // pull from selected character from SmashData and display this information
        let displaycharacter = this.props.character.map(el => {
            return (
                // allow Characters.js access to SmashData
                <CharacterDisplay displaycharacter={el} />
            )
        })
        return (
            <div>
                {displaycharacter[this.state.characterArrIndex]}
                {/* Save current character to favorites. Pass into
                favArray and pass to favorites */}
                <button onClick={() => this.saveToFavorites()}>Save to Favorites</button>

                {/* <button onClick = {() => this.props.saveFn}>Save to Favorites</button> */}
                {/* Allow for a created character to be added by push 
                to orginal array */}
                <button onClick={()=> this.createCharacter()}>Create</button>
            </div>
        )
    }
}
