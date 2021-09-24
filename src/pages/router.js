import { pageNames } from "../constant";
import Home from "./home";
import Splash from "./splash";
import RestaurantDetails from "./restaurantDetails";
import Auth from "./auth";

const router = [
  { name: pageNames.splash, component: Splash },
  { name: pageNames.auth, component: Auth },
  { name: pageNames.home.index, component: Home },
  { name: pageNames.restaurantDetails.index, component: RestaurantDetails },
];

export default router;
