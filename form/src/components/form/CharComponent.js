import React from "react"
import "./CharComponent.css"

const char = props => {
  return (
    <div className='Char' onClick={props.clicked}>
      {props.letter}
    </div>
  )
}

export default char
