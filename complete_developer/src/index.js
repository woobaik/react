import React, { Component } from 'react';
import ReactDOM from 'react-dom';


//Component
import Layout from './components/Layout';


class App extends Component {
  render() {
    return(
      <div>
        <Layout />
      </div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
