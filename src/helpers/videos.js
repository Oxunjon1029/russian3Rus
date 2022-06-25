import FifthVideo from "../videosFolder/FifthVideo";
import FirstVideo from "../videosFolder/FirstVideo";
import FourthVideo from "../videosFolder/FourthVideo";
import SecondVideo from "../videosFolder/SecondVideo";
import SeventhVideo from "../videosFolder/SeventhVideo";
import SixthVideo from "../videosFolder/SixthVideo";
import ThirdVideo from "../videosFolder/ThirdVideo";

export const videos_routes = [
  {
    path: '',
    component: FirstVideo,
    key: 1
  },
  {
    path: "secondVideo",
    component: SecondVideo,
    key: 2
  },
  {
    path: "thirdVideo",
    component: ThirdVideo,
    key: 3
  },
  {
    path: "fourthVideo",
    component: FourthVideo,
    key: 4
  },
  {
    path: "fifthVideo",
    component: FifthVideo,
    key: 5
  },
  {
    path: "sixthVideo",
    component: SixthVideo,
    key: 6
  },
  {
    path: "seventhVideo",
    component: SeventhVideo,
    key: 7
  },
]