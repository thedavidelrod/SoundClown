import React, { Component } from 'react'
import { fetchSounds } from '../../actions/sounds_actions'

export default class UserShow extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(e) {
        e.preventDefault()
        this.props.fetchSounds()
        this.props.fetchUser(user)

    }
    render() {
        debugger
        return (
            <div>
                <h1>test user profile</h1>
            </div>
        )
    }
}


