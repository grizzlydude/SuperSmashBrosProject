import React, { Component } from "react";
import Characters from './Characters'
// This file will handle placing characters in a Favorites array

export default class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            favArrIndex: 0
        }
    }

    deleteCharacter() {
        let favoriteArray = this.props.favArr[this.state.favArrIndex]

    }

    render() {
        let displaycharacter = this.props.character.map(el => {
            return (
                // allow Characters.js access to 
                <Characters displaycharacter={el} />
            )
        })
        return (
            <div>
                <div>
                    {displaycharacter[this.state.favArrIndex]}
                </div>
                <div>
                    {/* Update will require a toggle to function */}
                    <button>Update</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    }

}