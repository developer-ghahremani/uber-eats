import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../components/common/Container";
import { pageNames } from "../../constant";
import { auth } from "../../firebase";
import MainLayout from "../../layout/main";

const Splash = () => {
  const { navigate } = useNavigation();
  console.log("___Worked From Splash");

  useEffect(() => {
    return navigate(pageNames.auth);
    navigate(pageNames.home.index);
  }, [auth.currentUser]);

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
