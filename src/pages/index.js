import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import router from "./router";

const UberEats = () => {
  const Stack = createNativeStackNavigator();
  const state = useSelector((state) => state);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {router.map((route) => (
          <Stack.Screen
            initialParams={{ reduxObject: state }}
            {...route}
            key={route.name}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UberEats;

const styles = StyleSheet.create({});
