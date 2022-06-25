import React from 'react';
import '../styles/firstvideo.css';
import first from '../videos/first.mp4';
const FirstVideo = () => {
  return (
    <div className='first_video'>
      <video
        className="first"
        controls>
        <source width="500" height='100%' src={first} />
        <source src='../Images/back.png' type='video/png' />
      </video>
    </div>
  );
};

export default FirstVideo;
