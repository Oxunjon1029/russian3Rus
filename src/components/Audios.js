import React from 'react';
import { Outlet } from 'react-router';
import { audios_routes } from '../helpers/audios';
import Content from './Content';
import Headers from './Headers';
import '../styles/audios.css';

const Audios = () => {
  return (
    <div className='audios_container'>
      <div className='audios_header_con'>
        <Headers routes={audios_routes} />
      </div>
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};


export default Audios;