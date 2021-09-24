import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import router from "./router";

const UberEats = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {router.map((route) => (
          <Stack.Screen key={route.name} {...route} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UberEats;

const styles = StyleSheet.create({});
