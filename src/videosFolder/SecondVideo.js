import React from 'react';
import second from '../videos/second.mp4';
import '../styles/secondVideo.css';
const SecondVideo = () => {
  return (
    <div className='second_video'>
      <video
        height='500px'
        controls>
        <source width="500" height='100%' src={second} />
        <source src='../Images/back.png' type='video/png' />
      </video>
    </div>
  );
};


export default SecondVideo;