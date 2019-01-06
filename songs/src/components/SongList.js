import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends React.Component {
  render() {
    return(
      <div>SongList</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {songs : state.songs }
}


export default connect(mapStateToProps, { selectSong })(SongList);
