import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../components/common/Container";
import MainLayout from "../../layout/main";
import { getLog } from "../../utils";
import About from "./About";
import Menu from "./Menu";
import ViewCarts from "./ViewCarts";

const RestarantDetails = () => {
  getLog("Restaurant Details");

  return (
    <MainLayout>
      <Container flex={1}>
        <About />
        <Menu />
        <ViewCarts />
      </Container>
    </MainLayout>
  );
};

export default RestarantDetails;

const styles = StyleSheet.create({});
