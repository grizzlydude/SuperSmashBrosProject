import React, { Component } from "react";
import Characters from './Characters'
// This file will handle Displaying Characters for both
// Characters.js and Favorites.js

export default class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            characterArrIndex: 0
        }
    }

    render() {
        // pull from selected character from SmashData and display this information
        let displaycharacter = this.props.character.map(el => {
            return (
                // allow Characters.js access to SmashData
                <Characters displaycharacter={el} />
            )
        })
        return(
            <div>
                {displaycharacter[this.state.characterArrIndex]}
                {/* Save current character to favorites. Pass into
                favArray and pass to favorites */}
                <button>Save to Favorites</button>
                {/* Allow for a created character to be added by push 
                to orginal array */}
                <button>Create</button>
            </div>
        )
    }
}