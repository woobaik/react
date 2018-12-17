import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

state = { images: []};

  async onSearchSubmit(term) {
    const response = await axios
      .get('https://api.unsplash.com//search/photos', {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID 8525e3c123cdc5072887b640ef000f8077610996ef8eeea3d2708f22e298af51'
      }
    });

    this.setState({ images: response.data.results})
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
      </div>
    )
  }
}

export default App;
