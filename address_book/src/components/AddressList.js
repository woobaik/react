import React from 'react';
import { connect } from 'react-redux';
import { selectPerson } from '../actions'

class AddressList extends React.Component {

  onSelectAddress = (event) => {

    event.preventDefault()

  }

  renderList() {
    return this.props.addresses.map(address => {
      return (
        <div key={address.name}>
          <div>
            {address.name}
          </div>
          <div>
            {address.number}
          </div>
          <div>
            <button onClick={()=>this.props.selectPerson(address)}>Select</button>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { addresses: state.addresses}
}

export default connect(mapStateToProps,{ selectPerson })(AddressList);
