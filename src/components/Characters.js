import React, { Component } from 'react'
import SmashData from '../SmashData'
export default class Finder extends Component {
    constructor() {
        super()

        this.state = {
            characterName: '',
            characterImg:''
        }
    }

    // chooseCharacter(){
    //     const character = {
    //         name: this.props.name,
    //         image: this.props.image
    //     }
    // }

    render(){
        let character = SmashData.map(key => key)
        let {name, difficulty, image} = character
        // Display Characters currently not working
        return(
            <div className="allCharacters">
                <h1>{name}</h1>
                <h2>{difficulty}</h2>
                <h3>{image}</h3>
            </div>
        )
    }
}
