import React from 'react';

const VideoItem = ( { video } ) => {
  return(
    <div>
      <h3>{video.title}</h3>
      <img src={video.thumbnails.medium.url} />
      <h6>Published by <strong>{video.channelTitle}</strong></h6>
    </div>
  )
}

export default VideoItem;
