import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class PrarentComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            parentName: 'Parent'
        }
        this.greetPrarent = this.greetPrarent.bind(this)
    }
    greetPrarent(){
        alert(`Hello ${this.state.parentName}`)
    }
    render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetPrarent}/>
      </div>
    )
  }
}

export default PrarentComponent
