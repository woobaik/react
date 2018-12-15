import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


class App extends Component {

  state = { lat: null, errMsg: ''};

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({errMsg: err.message})
    );
  }

    renderContent() {
      if (this.state.errMsg && !this.state.lat) {
        return <div>Error: {this.state.errMsg}</div>;
      }

      if (!this.state.errMsg && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat}/>
      }
      return <Spinner msg="Please allow location permit" />
    }
  render() {
    return(
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector("#root"))
