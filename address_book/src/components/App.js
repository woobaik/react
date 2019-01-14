import React from 'react';
import AddressList from './AddressList'
import AddressDetail from './AddressDetail'

class App extends React.Component {
  render() {
    return(
      <div className="ui container">
        <AddressList />
        <AddressDetail />
      </div>
    )
  }
}


export default App;
