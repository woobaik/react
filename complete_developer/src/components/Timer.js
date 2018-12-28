import React from 'react';

//Component
import TimerHeader from './timer/TimerHeader'
import TimerButton from './timer/TimerButton'


class Timer extends React.Component {
  constructor() {
    super()
    this.state = {
      second: 0,
      isStarted: false
    }
  }



  handleStartClick = () => {
    if (!this.state.isStarted) {
      this.setState(prevState => ({
        isStarted: !prevState.isStarted
      }))
      this.timer = setInterval(() => {
        this.setState((prevState)=>({
          second: prevState.second += 1
        }))
      }, 1000)

    } else {
      clearInterval(this.timer)
      this.setState(prevState => ({
        isStarted: !prevState.isStarted
      }))
    }
  }


  componentWillUnmount() {
    clearInterval(this.timer)
  }



  render() {
    return(
      <div>
        <TimerHeader second={this.state.second}/>
        <TimerButton start={this.handleStartClick} go={this.state.isStarted}/>
      </div>
    )
  }
}



export default Timer
