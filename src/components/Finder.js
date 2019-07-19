import React, { Component } from 'react'
import Favorites from './Favorites'

// This will handle a search function for finding a character in favorite characters
export default class Finder extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <input placeholder="Search for Character"></input>
            </div>
        )
    }
}

