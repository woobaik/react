import React, { Component } from 'react';
import ReactDOM from 'react-dom';


//Component
import NameList from './components/NameList'

class App extends Component {
  render() {
    return(
      <div>
        <NameList number="I am Number 1" />
        <NameList number="I am NUmber 2" />
      </div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('root'))
