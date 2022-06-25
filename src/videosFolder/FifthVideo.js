import React from 'react';
import fifth from '../videos/fifth.mp4';
import '../styles/fifthVideo.css';
const FifthVideo = () => {
  return (
    <div className='fifth_video'>
      <video
        className="fifth"
        controls>
        <source height='100%' src={fifth} />
        <source src='../Images/back.png' type='video/png' />
      </video>
    </div>
  );
};


export default FifthVideo;