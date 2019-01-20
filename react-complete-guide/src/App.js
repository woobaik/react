import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person'

class App extends Component {

  state = {
    persons : [
      {name: "Joungwoo", age: 33},
      {name: "Haram", age: 29},
      {name: "Joungann", age: 27},
    ],
    cardRendered : true
  }

  personRender = () => {
    return this.state.persons.map(person => {
      return (
        <div key={person.name}>
          <Person name={person.name} age={person.age} change={this.handleChange} />
        </div>
      );
    })
  }

  switchName = () => {
    this.setState({persons: [
      {name: "Joungwoo", age: 33},
      {name: "hamie", age: 29},
      {name: "Joungann", age: 27},
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.hideCard} >{this.state.cardRendered ? 'Close Card' : 'Open Card'}</button>

      </div>
    );
  }
}

export default App;
