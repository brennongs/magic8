import React, { Component } from 'react';
import api from './utils/api'
import './styles.css'

const MainButton = (props)=>(
  <div
    className="button"
    onClick={props.action}>
    {props.type ? 'SHAKE' : 'RESET'}
  </div>
)

const Magic8 = (props)=>(
  <div className="magic8">
    {props.front &&
    <div className="front">
      8
      <div className="light"></div>
    </div>}

    {props.answer &&
    <div className="answer">
      <div className="triangle">
        <span>{props.answer}</span>
      </div>
    </div>}
  </div>
)

class App extends Component {
  constructor (){
    super()

    this.state={
      front: true,
      ask: true,
      answer: null,
    }
    this.changeState=this.changeState.bind(this)
  }

  changeState(){
    if (this.state.ask){
      api.getAnswer().then(answer =>{
        this.setState({
          answer: answer,
          front: false,
          ask: false
        })
      })
    }
    else{
      this.setState({
        front: true,
        ask: true,
        answer: null
      })
    }
  }

  render() {
    return (
      <div className="container">
        <Magic8
          front={this.state.front}
          answer={this.state.answer}
          />

        <MainButton
          type={this.state.ask}
          action={this.changeState}
          />
      </div>

    )
  }
}

export default App;
