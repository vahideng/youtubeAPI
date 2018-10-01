import React from 'react';

const VideoDetails = props => {

  if (!props.video) {
    return <div>
      Loading...
    </div>
  }

  const videoId = props.video.id.videoId;
    console.log(props,"this props");
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  console.log(videoUrl, 'urlddsfsdfsdf');
  return (<div className="video-detail col-md-8">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={videoUrl}/>
    </div>
    <div className="details">
      <div>{props.video.snippet.title}</div>
      <div>{props.video.snippet.description}</div>

    </div>
  </div>);
}

export default VideoDetails;
