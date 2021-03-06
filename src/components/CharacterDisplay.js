import React, { Component } from 'react'

// Display Characters deconstructed Data
export default class Finder extends Component {
    constructor() {
        super()

    }
    render() {
        // deconstruct SmashData for all characters or the character passed through
        return (
            <div>
                <img src={this.props.displaycharacter.image} />
                <div className="textInfo">
                    <h2>
                        Name: {this.props.displaycharacter.name}
                    </h2>
                    <h3>
                        Difficulty: {this.props.displaycharacter.difficulty}
                    </h3>
                </div>
            </div>
        )
    }
}