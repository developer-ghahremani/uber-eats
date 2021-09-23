import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import router from "./router";
import IText from "../../components/common/IText";
import colors from "../../styles/colors";

const Home = () => {
  const Stack = createBottomTabNavigator();
  return (
    <Stack.Navigator>
      {router.map((route) => (
        <Stack.Screen
          options={{
            title: route.title,
            headerShown: false,
            tabBarIcon: route.tabBarIcon,
            tabBarLabel: ({ focused }) => (
              <IText
                fontSize={14}
                color={focused ? colors.black : colors.gray1}>
                {route.title}
              </IText>
            ),
          }}
          {...route}
          key={route.name}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
