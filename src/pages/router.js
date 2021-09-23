import { pageNames } from "../constant";
import Home from "./home";
import Splash from "./splash";
import RestaurantDetails from "./restaurantDetails";

const router = [
  { name: pageNames.splash, component: Splash },
  { name: pageNames.home.index, component: Home },
  { name: pageNames.restaurantDetails.index, component: RestaurantDetails },
];

export default router;
