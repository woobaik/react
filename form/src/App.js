import React, { Component } from "react"
import "./App.css"
import Validation from "./components/form/ValidationComponent"
import Char from "./components//form/CharComponent"

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
        <p>
          <Validation length={this.state.length} />
        </p>
        <p>
          {this.state.input.split("").map(letter => {
            return <Char letter={letter}></Char>
          })}
        </p>
      </div>
    )
  }
}

export default App
