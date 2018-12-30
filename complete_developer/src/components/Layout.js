import React, { Component } from 'react';
import Button from './Button'
import Timer from './Timer'

class Layout extends Component {

  constructor() {
    super();
    this.state = {
      firstName: 'Chris',
      isTimerMounted: true
    }
  }

  onClickEvent = () => {
    this.setState({firstName: 'Jane'})
  }

  toggleTimer = () => {
    this.setState((prevState) => ({
      isTimerMounted: !prevState.isTimerMounted
    }))
  }



  render() {
    return(
      <div>
        <h1>Welcome to my site!</h1>
        <h3>Happy to have you here</h3>
        <h1>{this.state.firstName}</h1>
        <Button changeName={this.onClickEvent}/>
        <p>
          Lorem Ipsum is simply dummy text of the printing and  typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        {this.state.isTimerMounted ?
          <div>
            <Timer />
            <Timer />
            <Timer />
          </div>
          :
          null
        }
        <button onClick={this.toggleTimer}>{this.state.isTimerMounted ? 'Hide Button' : 'Show Button'}</button>


      </div>
    )
  }
}

export default Layout
