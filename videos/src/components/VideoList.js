import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({videoList}) => {

  const videos = videoList.map((video) => {
    return <div><VideoItem key={video.id.videoId} video={video.snippet} /></div>
  })

  return(
    <div>
      {videos}
    </div>
  )
}

export default VideoList
