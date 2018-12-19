import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Header username='haram'/>
        <Greeting />
      </div>
    )
  }
}

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    )
  }
}

class Greeting extends Component {


  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeofDay

    if (hours < 12) {
      timeofDay = 'morning'
    } else if  (hours >=12 && hours < 17) {
      timeofDay = "afternoon"
    } else {
      timeofDay = 'night'
    }
    return <div>Good {timeofDay} to you, sir or madam!</div>
  }
}







ReactDOM.render(<App /> , document.querySelector('#root'))

if (module.hot) {
  module.hot.accept()
}
