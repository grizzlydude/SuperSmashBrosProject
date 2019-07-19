import React, { Component } from "react";
import CharacterDisplay from './CharacterDisplay'
// This file will handle placing characters in a Favorites array

export default class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            favArrIndex: 0
        }
    }

    deleteCharacter() {
        // let favoriteArray = this.props.favArr[this.state.favArrIndex]
        console.log('You pressed delete')
    }

    updateCharacter() {
        console.log('You have pressed Update')
    }

    render() {
        let displaycharacter = this.props.character.map(el => {
            return (
                // allow Characters.js access to 
                <CharacterDisplay displaycharacter={el} />
            )
        })
        return (
            <div>
                <div>
                    {displaycharacter[this.state.favArrIndex]}
                </div>
                <div>
                    {/* Update will require a toggle to function */}
                    <button onClick={() => this.deleteCharacter()}>Update</button>
                    <button onClick={() => this.updateCharacter()}>Delete</button>
                </div>
            </div>
        )
    }

}