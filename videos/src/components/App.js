import React from 'react';
import youtube from '../apis/youtube'

//Components

import SearchBar from './SearchBar'
import VideoList from './VideoList'


class App extends React.Component {

  state = {videos : []}

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({videos: response.data.items})
  }

  render() {
    return(
      <div className="App ui container">
        <SearchBar onTermSubmit={this.onTermSubmit}/>
        <VideoList videoList={this.state.videos}/>
      </div>
    )
  }
}


export default App
