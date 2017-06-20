import React, {Component} from 'react'

export default class Magic8 extends Component {

  render() {
    return (
      <div className="ball">
        {this.state.side === 'front' ?
        <div className="eight">8</div> :
        <div className="display">
          <span>{this.state.answer}</span>
        </div>}
      </div>
    )
  }
}
