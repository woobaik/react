import React, { Component } from "react"
import "./App.css"

class App extends Component {
  state = {
    input: "",
    length: 0
  }

  handleChange = event => {
    this.setState({
      input: event.target.value,
      length: event.target.value.length
    })
  }

  render() {
    return (
      <div className='App'>
        <label for='input'>Text input</label>
        <input name='input' id='input' onChange={this.handleChange}></input>
        <p>{this.state.length}</p>
        <p>{this.state.input}</p>
      </div>
    )
  }
}

export default App
