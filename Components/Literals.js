import React, { Component } from 'react'

class Literals extends Component {
    constructor(props){
        super(props)
        this.state = {
            p: 10,
            v: 0.25
        }
    }
    total(){
        this.setState(()=>({
            t: (this.state.p*(1+this.state.v)).toFixed(2)
        }))
    }
    render() {
    return (
      <div>
        <h1>Total : {this.state.t}</h1>
        <button onClick={() => this.total()}>Click</button>
      </div>
    )
  }
}

export default Literals