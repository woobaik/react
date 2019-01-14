import React from 'react';
import { connect } from 'react-redux';

const AddressDetail = ({addressDetail}) => {

  if (!addressDetail) {
    return (<div>Select a </div>)
  }

  return(
    <div><p>{addressDetail.name.toString()}</p></div>
  )

}

const mapStateToProps = (state) => {

  return { addressDetail: state.selectPerson}
}

export default connect(mapStateToProps)(AddressDetail)
