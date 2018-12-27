import React, {Component } from 'react';

//Component
import Welcome from './Welcome';

class NameList extends Component {

  nameMapper(nameArray) {
    nameArray.map((name, i) => {
      return <li>{ name }</li>
    })
  }

  render() {
    const nameArray = ["Samantha", "Jane", "Billy", "JoeyJoe", "Mary"]
    return (
      <div>
        <h3>I am Number {this.props.number}</h3>
        <Welcome firstName="Chris" lastName="Smith" originalNumber={this.props.number}/>
        <ul>
          {this.nameMapper(nameArray)}
        </ul>
        <Welcome firstName="Jane" lastName="Doe"/>
      </div>
    )
  }
}


export default NameList
