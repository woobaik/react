import React, { Component } from 'react';
import ReactDOM from 'react-dom';


//Component
import Layout from './components/Layout';

//DATA
import names from './data'


class App extends Component {
  render() {
    return(
      <div>
        <Layout names={names} />
      </div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
