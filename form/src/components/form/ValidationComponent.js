import React from "react"

const validation = props => {
  let lengthValidationMsg = null
  if (props.length === 0) {
    lengthValidationMsg = null
  } else if (props.length < 5) {
    lengthValidationMsg = <div>text is too short!</div>
  } else {
    lengthValidationMsg = <div>Text is long enough</div>
  }

  return (
    <div>
      <div>Length : {props.length}</div>
      {lengthValidationMsg}
    </div>
  )
}

export default validation
