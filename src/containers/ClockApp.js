import React, { Component } from 'react'

class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {
            time: 0
        }
    }
    timer(){
        setInterval(() => {
            let time = this.state.time
            this.setState({time: time += 1})
        }, 1000)
    }
    componentDidMount() {
        this.timer()
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>{this.state.time}</div>
        )
    }
}

export default Clock