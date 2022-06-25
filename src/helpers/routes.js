import Games from "../components/Games";
import Home from "../components/Home";
import Videos from "../components/Videos";
import { audios_routes } from "./audios";
import { games_routes } from "./games";
import { videos_routes } from "./videos";
export const routes = [
  {
    path: "/",
    key: "home",
    component: Home
  },

  {
    path: "/audio",
    key: "audio",
    component: "",
    children: audios_routes
  },
  {
    path: "/video",
    key: "video",
    component: Videos,
    children: videos_routes
  },
  {
    path: "/games",
    key: "games",
    component: Games,
    children: games_routes
  },

]