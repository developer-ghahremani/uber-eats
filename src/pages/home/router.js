import React from "react";
import Home from "./home";
import { pageNames } from "../../constant";
import Browse from "./browse";
import Grocery from "./grocery";
import Orders from "./orders";
import Account from "./account";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import colors from "../../styles/colors";

const router = [
  {
    name: pageNames.home.home,
    component: Home,
    title: "Home",
    tabBarIcon: ({ focused }) => (
      <FontAwesome5
        size={20}
        name="home"
        color={focused ? colors.black : colors.gray2}
      />
    ),
  },
  {
    name: pageNames.home.browse,
    component: Browse,
    title: "Browse",
    tabBarIcon: ({ focused }) => (
      <FontAwesome5
        size={20}
        name="search"
        color={focused ? colors.black : colors.gray2}
      />
    ),
  },
  {
    name: pageNames.home.grocery,
    component: Grocery,
    title: "Grocery",
    tabBarIcon: ({ focused }) => (
      <FontAwesome5
        size={20}
        name="shopping-bag"
        color={focused ? colors.black : colors.gray2}
      />
    ),
  },
  {
    name: pageNames.home.orders,
    component: Orders,
    title: "Orders",
    tabBarIcon: ({ focused }) => (
      <FontAwesome5
        size={20}
        name="receipt"
        color={focused ? colors.black : colors.gray2}
      />
    ),
  },
  {
    name: pageNames.home.account,
    component: Account,
    title: "Account",
    tabBarIcon: ({ focused }) => (
      <FontAwesome5
        size={20}
        name="user"
        color={focused ? colors.black : colors.gray2}
      />
    ),
  },
];
export default router;
