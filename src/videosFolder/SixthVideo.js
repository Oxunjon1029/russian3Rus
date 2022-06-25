import React from 'react';
import sixth from '../videos/sixth.mp4';
import '../styles/sixthVideo.css';
const SixthVideo = () => {
  return (
    <div className='sixth_video'>
      <video
        className="sixth"
        controls>
        <source width="500" height='100%' src={sixth} />
        <source src='../Images/back.png' type='video/png' />
      </video>
    </div>
  );
};


export default SixthVideo;