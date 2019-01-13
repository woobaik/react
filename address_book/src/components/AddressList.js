import React from 'react';
import { connect } from 'react-redux';

const AddressList = () => {
  return (
    <div>
      Address List
    </div>
  )

  const mapStateToProps = (state) => {
    console.log(state)

    return state;
  }
}

export default connect(mapStateToProps)(AddressList);
