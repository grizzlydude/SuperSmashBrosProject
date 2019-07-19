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

    render() {
        return (
            <div>
                <div>
                    {favorites[this.state.favArrIndex]}
                </div>
                <div>
                    <button>Update</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    }

}