import React, { Component } from "react";
import Characters from './Characters'
// This file will handle Displaying Characters for both
// Characters.js and Favorites.js

export default class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            favArrIndex: 0
        }
    }

    render() {
        // pull from selected character from SmashData and display this information
        let favorites = this.props.character.map(el => {
            return (
                // allow Characters.js access to 
                <Characters characters={el} />
            )
        })
    }
}