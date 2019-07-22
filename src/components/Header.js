import React, { Component } from 'react'
import Finder from './Finder';
// import Header from './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="Header">
                    <h1>Smash Bros For Life</h1>
                </div>
                <div className='searchBar'>
                    <Finder />
                </div>
            </div>
        )
    }
}