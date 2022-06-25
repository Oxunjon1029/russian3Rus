import React from 'react';
import fourth from '../videos/fourth.mp4';
import '../styles/fourthVideo.css';
const FourthVideo = () => {
  return (
    <div className='fourth_video'>
      <video
        className="fourth"
        controls>
        <source  height='100%' src={fourth} />
        <source src='../Images/back.png' type='video/png' />
      </video>
    </div>
  );
};


export default FourthVideo;