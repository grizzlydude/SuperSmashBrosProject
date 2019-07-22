import React, { Component } from 'react'

// This will handle a search function for finding a character in favorite characters
export default class Finder extends Component {
    constructor() {
        super()
    }

handleChange(event){
    
}

    render() {
        return (
            <div>
                <input placeholder="Search for Character" onChange={this.handleChange()}></input>
            </div>
        )
    }
}

