import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            cnt: 0
        }
    }
    inc(){
       
        this.setState(prevState => ({
            cnt: prevState.cnt + 1
        }))
        console.log(this.state.cnt)
    }
    
    incFive(){
        this.inc()
        this.inc()
        this.inc()
        this.inc()
        this.inc()
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.cnt}</h1>
                <button onClick={() => this.incFive()}>Click To Add</button>
            </div>
        )
    }
}

export default Counter