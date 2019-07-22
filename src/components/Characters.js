
import React, { Component } from "react";
import CharacterDisplay from './CharacterDisplay'
import CreateUpdate from './CreateUpdate'
import axios from 'axios'
import Favorites from "./Favorites";

// This file will handle Displaying Characters for both
// CharacterDisplay.js and Favorites.js

export default class Characters extends Component {
    constructor() {
        super()

        this.state = {
            characterArrIndex: 0,
            charactersArray: [],
            create: false
        }
        this.getCharacters()
    }

    getCharacters() {
        axios.get('/api/smashdata').then(res => {
            console.log('This has been called', res.data)
            this.setState({
                charactersArray: res.data
            })
        })
    }

    saveToFavorites() {
        this.state.charactersArray[this.state.characterArrIndex].favorite = true
        axios.put(`/api/smashdata/${this.state.charactersArray[this.state.characterArrIndex].id}`, this.state.charactersArray[this.state.characterArrIndex])
            .then(res => {
                console.log("res.data: ", res.data)
            })
        return console.log('Pressed Saved')
    }

    createCharacter() {
        this.setState ({
            create: true
        })
        return console.log("Pressed Create Character")
    }

    randomizeCharacters() {
        const randCharacter = Math.floor(Math.random() * 15)
        axios.get(`/api/smashdata/${this.state.charactersArray[this.state.characterArrIndex].id}`).then(res => {
            console.log('res.data ', res.data)
            this.setState({
                characterArrIndex: randCharacter
            })
        })
        return console.log('Pressed Random Character')
    }

    cancelCreate() {
        this.setState({
            create: false
        })
    }

    render() {
        // pull from selected character from SmashData and display this information
        let displaycharacter = this.state.charactersArray.map(el => {
            return (
                // allow Characters.js access to SmashData
                <CharacterDisplay displaycharacter={el} />
            )
        })
        return (
            <div>
                {this.state.create ? (
                    <div>
                        <CreateUpdate />
                        <button onClick={() => this.cancelCreate()}>Cancel</button>
                    </div>
                ) : (
                        <div>
                            {displaycharacter[this.state.characterArrIndex]}
                            {/* Save current character to favorites. Pass into
            favArray and pass to favorites */}
                            <button onClick={() => this.saveToFavorites()}>Save to Favorites</button>

                            {/* Allow for a created character to be added by push 
            to orginal array */}
                            <button onClick={() => this.createCharacter()}>Create</button>
                            <button onClick={() => this.randomizeCharacters()}>Random Character</button>
                        </div>
                    )
                }
            </div>
        )
    }
}
