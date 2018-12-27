import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
        <h2>The top level component passed this along : {this.props.originalNumber}</h2>
        <h4>Welcome to my site, {this.props.firstName}!</h4>
        <h4>Content: {this.props.lastName}!!</h4>
      </div>
    )
  }

  static defaultProps = {
    originalNumber: "hihi"
  }
}


export default Welcome
