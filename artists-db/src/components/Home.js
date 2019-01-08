import React from 'react';

import Banner from './Banner';
import ArtistList from './ArtistList';

const URL_ARTISTS = ' http://localhost:3004/artists';

class Home extends React.Component {

  state = {
    artists: ''
  }

  componentDidMount() {
    fetch(URL_ARTISTS, {
      method:'GET'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({
        artists:json
      })
    })
  }

  render() {
    return(
      <div>
        <Banner />
        <ArtistList allArtists ={this.state.artists}/>
      </div>
    )
  }
}


export default Home;
