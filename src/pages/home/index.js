import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import router from "./router";
import IText from "../../components/common/IText";
import colors from "../../styles/colors";
import { pageNames } from "../../constant";

const Home = () => {
  const Stack = createBottomTabNavigator();
  return (
    <Stack.Navigator>
      {router.map((route) => (
        <Stack.Screen
          options={{
            headerShown: false,
            tabBarIcon: route.tabBarIcon,
            tabBarLabel: ({ focused }) => (
              <IText
                fontSize={12}
                color={focused ? colors.black : colors.gray1}>
                {route.title}
              </IText>
            ),
            unmountOnBlur: route.name === pageNames.home.orders,
          }}
          key={route.name}
          {...route}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
