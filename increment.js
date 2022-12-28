import React, { Component } from 'react'

 class Increment extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:0
      }
    }
    messageIncrement(){
        this.setState({
            message:this.state.message+1
        })  
    }
    messageDecrement(){
        this.setState({
            message:this.state.message-1
        })
    }
    
  render() {
    return (
      <div className='increclass'>
          <h1>{this.state.message}</h1>
        <button onClick={()=>this.messageIncrement()} className="btn1">button1</button>
        <button onClick={()=>this.messageDecrement()} className="btn2">button2</button>

      </div>
    )
  }
}

export default Increment
