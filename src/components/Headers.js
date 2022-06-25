import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/header.css';
const Headers = ({ routes }) => {
  const [state, setState] = useState({ prev: '', next: '' });
  const [counter, setCounter] = useState(1)
  const navigate = useNavigate()
  const click = (way) => {
    console.log(way);
    if (way === true) {
      setCounter(counter => counter + 1);
      let route = routes.filter(item => item.key === counter + 1);
      console.log(route);
      route.forEach((item) => {
        setState({ next: item.path });
      })
    } else {
      setCounter(counter => counter - 1);
      let route = routes.filter(item => item.key === counter - 1);
      route.forEach((item) => {
        setState({ prev: item.path });
      })
    }



  };

  useEffect(() => {
    state.next ? navigate({ pathname: state.next }) : navigate({ pathname: state.prev })
  }, [state, counter, navigate])
  return (
    <div className='header_container'>
      <div className='header_menu_item'>
        <Link to='/'>Menu</Link>
      </div>
      <div className='header_next_prev'>
        <button onClick={() => click(false)}>&#8592;</button>
        <button onClick={() => click(true)}>&#8594;</button>
      </div>
    </div>
  );
};

export default Headers;
