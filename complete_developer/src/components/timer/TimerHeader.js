import React from 'react';

const TimerHeader = (props) => {
  return(
    <div>
      <h4>I have been running for {props.second}</h4>
    </div>
  )
}


export default TimerHeader
