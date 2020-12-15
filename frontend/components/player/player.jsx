import React, { Component } from 'react'
import ReactPlayer from 'react-player'
export default class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
          volume: 0.8,
          muted: false,
          played: 0,
          playedSeconds: 0,
          loaded: 0,
          duration: 0,
          playbackRate: 1.0,
          loop: false,
          startT: null,
        };
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
