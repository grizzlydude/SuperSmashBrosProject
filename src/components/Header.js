import React, { Component } from 'react'
import Finder from './Finder';

export default class Header extends Component {
    render() {
        return (
            <div
            ><h1>Smash Bros For Life</h1>
                <Finder />
            </div> 
        )
    }
}