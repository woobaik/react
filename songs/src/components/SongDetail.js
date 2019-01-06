import React from 'react';
import { connect } from 'react-redux';


class songDetail extends React.Component {

  render() {
    return(
      <div>
      ho
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {song: state.selectSong}
}

export default connect(mapStateToProps)(songDetail);
