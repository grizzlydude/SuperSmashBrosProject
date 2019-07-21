import React, { Component } from "react";
import CharacterDisplay from './CharacterDisplay'
import Axios from "axios";
// This file will handle placing characters in a Favorites array

export default class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            favArrIndex: 0,
            favArray: []
        }
        this.getFavorites()
    }

    getFavorites() {
        Axios.get('/api/smashdata?favorites=true').then(res => {
            console.log('this is what your looking for ', res.data)
            this.setState({
                favArray: res.data
            })
        })
    }

    deleteCharacter() {
        // let favoriteArray = this.props.favArr[this.state.favArrIndex]
        console.log('You pressed delete')
    }

    updateCharacter() {
        console.log('You have pressed Update')
    }

    render() {
        let displaycharacter = this.state.favArray.map(el => {
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
                {/* Update will require a toggle to function */}
                {this.state.favArray.length > 0 &&
                    <div>
                        <button onClick={() => this.deleteCharacter()}>Update</button>
                        <button onClick={() => this.updateCharacter()}>Delete</button>
                    </div>
                }
            </div>
        )
    }

}