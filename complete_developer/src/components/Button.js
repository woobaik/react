import React from 'react'

class Button extends React.Component {

  constructor(props) {
    super(props)
    this.onClickEvent = this.onClickEvent.bind(this)
  }

  onClickEvent() {
    this.props.changeName()
  }

  render() {
    return(
      <div>
        <button onClick={this.onClickEvent}>Button</button>
      </div>
    )
  }
}

export default Button
