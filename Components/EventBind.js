import React, { Component } from 'react'

class EventBind extends Component {
    constructor(){
        super()
        this.state={
            message: 'hello'
        }
    }
    click(){
        this.setState({
            message: 'How Are You Harsh'
        })
    }
    render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.click.bind(this)}>Click To say How are You</button>
      </div>
    )
  }
}

export default EventBind