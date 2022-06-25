import React from 'react';
import '../styles/notFoundPage.css';
import notFound from '../Images/notFound.jpg';
const NotFound = () => {
  return (
    <div className='not_found_container'>
      <img src={notFound} alt='Error img' />
      <a className='not_found_btn' href='/'>
        Go to Home Page
      </a>
    </div>
  );
};

export default NotFound;
