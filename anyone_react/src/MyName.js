import React, { Component } from 'react';

class MyName extends Component {

  render() {
    return (
      <div>
        안녕하세요! 제 이름은 꼬마 {this.props.name} 입니당
      </div>
    )
  }
}


MyName.defaultPros = {
  name: "<<<기본이름>>>"
}

export default MyName;
