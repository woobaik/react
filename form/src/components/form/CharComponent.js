import React from "react"
import "./CharComponent.css"

const char = props => {
  return <div className='Char'>{props.letter}</div>
}

export default char
