import React from 'react';

class TimerButton extends React.Component {


  render() {
    return(
      <button onClick={this.props.start}>{this.props.go === true ? 'Stop' : 'Start'}</button>
    )
  }
}


export default TimerButton
