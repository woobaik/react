import './videoItem.css';

import React from 'react';


const VideoItem = ( { video } ) => {
  return(
    <div className="video-item item">
      <img className="ui image" src={video.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.title}</div>
      </div>
    </div>
  )
}

export default VideoItem;
