import React from 'react'

const Spinner = (props) => {
  console.log(props);
  return (
    <div class="ui active dimmer">
      <div class="ui large text loader">{props.msg}</div>
    </div>
  )
}

Spinner.defaultProps = {
  msg : 'Loading'
}


export default Spinner
