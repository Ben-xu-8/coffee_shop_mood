import React from 'react';
import videoBg from '../Assets/coffeeshopcinematic.mp4';

const VideoScreen = () => {
  return (
    <div className='container'>
      <div className='videoContainer'>
        <video className='video' src={videoBg} autoPlay loop muted />
      </div>
    </div>
  );
};

export default VideoScreen;
