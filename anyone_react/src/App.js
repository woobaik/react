import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    const name = "Haram"
    return (
      <div className="App">
        <div>김하람의 영어 이름 : { name }</div>
        <div>김낸뚜</div>
        <div>
          {
            (function() {
              if (name === "Haram") return "Haramie"
              if (name === "Yain") return "Ggang Pae"
              if (name === "Harams") return "Haramzzing"
              return "없다"
            })()
          }
        </div>
      </div>

    );
  }
}

export default App;
