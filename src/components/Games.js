import React from "react";
import Headers from "./Headers";
import { Outlet } from "react-router-dom";
import "../styles/games.css";
import { games_routes } from "../helpers/games";
import Content from "./Content";
const Games = () => {
  return (
    <div className='games_container'>
      <div className='games_header_con'>
        <Headers routes={games_routes} />
      </div>
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};

Games.propTypes = {};

export default Games;
