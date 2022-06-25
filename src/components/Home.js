import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import audio from "../Images/audio_img.jpg";
import video from "../Images/video_img.jpg";
import games from "../Images/games_img.jpg";
const Home = () => {
  return (
    <div className='home_container'>
      <Link to='audio'>
        <div className='home_audio_card'>
          <div className='home_audio_img'>
            <img src={audio} alt='Error img' />
          </div>
          <button className='home_audio_name'>Аудио</button>
        </div>
      </Link>
      <Link to='video'>
        <div className='home_video_card'>
          <div className='home_video_img'>
            <img src={video} alt='Error img' />
          </div>
          <button className='home_video_name'>Видео</button>
        </div>
      </Link>
      <Link to='games'>
        <div className='home_games_card'>
          <div className='home_games_img'>
            <img src={games} alt='Error img' />
          </div>
          <button className='home_games_name'>Игра</button>
        </div>
      </Link>
    </div>
  );
};

export default Home;
