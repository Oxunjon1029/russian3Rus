import React from 'react';
import third from '../videos/third.mp4';
import '../styles/thirdVideo.css';
const ThirdVideo = () => {
  return (
    <div className='third_video'>
      <video
        className="third"
        controls>
        <source width="500" height='100%' src={third} />
        <source src='../Images/back.png' type='video/png' />
      </video>
    </div>
  );
};


export default ThirdVideo;