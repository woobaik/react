import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {name: 'Haram', age: 29}
  }

  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        <div>{this.state.age}</div>
      </div>
    )
  }
}

ReactDOM.render(<App /> , document.querySelector('#root'))
