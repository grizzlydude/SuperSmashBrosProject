import React, { Component } from "react";
import CharacterDisplay from './CharacterDisplay.js'
import Characters from './Characters'
import axios from "axios";
import CreateUpdate from './CreateUpdate'
import './CharacterDisplay.css'
// This file will handle placing characters in a Favorites array

export default class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            favArrIndex: 0,
            favArray: [],
            editing: false
        }
        setInterval(() => {
            this.getFavorites()
        }, 500);
        // this.getFavorites()
    }

    getFavorites() {
        axios.get('/api/smashdata?favorites=true').then(res => {
            // console.log('this is what your looking for ', res.data)
            this.setState({
                favArray: res.data
            })
        })
    }

    deleteCharacter() {
        this.state.favArray[this.state.favArrIndex].favorite = false
        axios.put(`/api/smashdata/${this.state.favArray[this.state.favArrIndex].id}`, this.state.favArray[this.state.favArrIndex])
            .then(res => {
                console.log('res.data: ', res.data)
            })
        console.log(this.state.favArray)
        console.log('')
        console.log('You pressed delete')
    }

    updateCharacter() {
        this.setState({
            editing: true
        })
        console.log('You have pressed Update')
    }

    cancelUpdate() {
        this.setState({
            editing: false
        })
    }

    render() {
        let displaycharacter = this.state.favArray.map(el => {
            return (
                // allow Characters.js access to 
                // displaying all favorites in favArray
                <CharacterDisplay displaycharacter={el} />
            )
        })
        return (
            <div>
                {/* Update will require a toggle to function */}
                {this.state.favArray.length > 0 &&
                    <div>
                        {this.state.editing ? (
                            <div>
                                <CreateUpdate character={this.state.favArray[this.state.favArrIndex]} />
                                <button onClick={() => this.cancelUpdate()}>Cancel</button>
                            </div>
                        ) : (
                                <div>
                                    <div className='favoriteDisplay'>
                                        {displaycharacter}
                                    </div>
                                    <button onClick={() => this.updateCharacter()}>Update</button>
                                    <button onClick={() => this.deleteCharacter()}>Delete</button>
                                </div>
                            )
                        }
                    </div>
                }
            </div>
        )
    }

}