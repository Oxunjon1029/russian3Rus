import React from 'react';
import { Outlet } from 'react-router';
import { videos_routes } from '../helpers/videos';
import Content from './Content';
import Headers from './Headers';
import '../styles/videos.css';

const Videos = () => {
  return (
    <div className='videos_container'>
      <div className='videos_header_con'>
        <Headers routes={videos_routes} />
      </div>
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};


export default Videos;