import React, { Component } from "react";
import axios from 'axios'
// This will handle creation of a new character
// may not need this file
export default class CreateUpdate extends Component {
    constructor(props) {
        super(props);

        if (!this.props.character) {
            // setting state to create mode
            this.state = {
                name: '',
                difficulty: 'Beginner',
                image: ''
            }
        }
        else {
            // setting state to update mode
            this.state = this.props.character
        }
    }

    saveFunction() {
        console.log('Called Save');
        if(!this.props.character) {
            // DO CREATE STUFF            
            axios.post('/api/smashdata', this.state).then(res => {
                console.log(res)
                console.log('')
                console.log('res.data: ', res.data)
            });
        } else {
            // DO UPDATE STUFF
            axios.put(`/api/smashdata/${this.props.character.id}`, this.state).then(res => {
                console.log(res)
                console.log('')
                console.log('res.data: ', res.data)
            });
        }
    }


    render() {
        return (
            <form onSubmit={() => this.saveFunction()}>
                <input value={this.state.name} placeholder="Name" onChange={(event) => this.setState({
                    name: event.target.value
                })}/>
                <select value={this.state.difficulty} onChange={(event) => this.setState({
                    difficulty: event.target.value
                })}>
                    <option value='Beginner'>Beginner</option>
                    <option value='Intermediate'>Intermediate</option>
                    <option value='Experienced'>Experienced</option>
                </select>
                <input value={this.state.image} placeholder="Picture URL" onChange={(event) => this.setState({
                    image: event.target.value })}/>
                {/* <button onClick={() => this.saveFunction()}>Save</button> */}
                <input type='submit' value="Save"/>
            </form>
        )
    }
}