// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';



// Create a react component
const App = () => {
  const buttonText = { text: "Click Me!"};
  const labelText = 'Enter Name :'

  return (
    <div>
      <form>
        <label htmlF or="name">
         { labelText}
        </label>
        <input type="text" id="name" />
        <button style={{backgroundColor: 'blue', color: 'white'}}>
          {buttonText.text}
        </button>
      </form>
    </div>
  );
}


// Take the react Component and show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root'))
