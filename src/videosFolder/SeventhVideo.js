import React from 'react';
import seventh from '../videos/seventh.mp4';
import '../styles/seventhVideo.css';
const SeventhVideo = () => {
  return (
    <div className='seventh_video'>
      <video
        className="seventh"
        controls>
        <source height='100%' src={seventh} />
        <source src='../Images/back.png' type='video/png' />
      </video>
    </div>
  );
};


export default SeventhVideo;