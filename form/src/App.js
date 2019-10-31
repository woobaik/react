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

  handleRemoveCard = idx => {
    const targetCard = this.state.input.split("")
    targetCard.splice(idx, 1)
    this.setState({ input: targetCard.join("") })
  }

  render() {
    return (
      <div className='App'>
        <label htmlFor='input'>Text input</label>
        <input
          name='input'
          id='input'
          onChange={this.handleChange}
          value={this.state.input}
        ></input>
        <p>
          <Validation length={this.state.length} />
        </p>
        <p>{this.state.input}</p>
        <p>
          {this.state.input.split("").map((letter, idx) => {
            return (
              <Char
                letter={letter}
                clicked={() => this.handleRemoveCard(idx)}
              ></Char>
            )
          })}
        </p>
      </div>
    )
  }
}

export default App
