import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../components/common/Container";
import { pageNames } from "../../constant";
import MainLayout from "../../layout/main";

const Splash = () => {
  const { navigate } = useNavigation();
  console.log("___Worked From Splash");

  useEffect(() => {
    navigate(pageNames.home.index);
  }, []);
  return (
    <MainLayout>
      <Container flex={1} alignItems="center" justifyContent="center">
        <Text>Hello</Text>
      </Container>
    </MainLayout>
  );
};

export default Splash;

const styles = StyleSheet.create({});
