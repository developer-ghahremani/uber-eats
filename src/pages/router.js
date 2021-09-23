import { pageNames } from "../constant";
import Home from "./home";
import Splash from "./splash";

const router = [
  { name: pageNames.splash, component: Splash },
  { name: pageNames.home.index, component: Home },
];
export default router;
