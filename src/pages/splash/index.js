import { useNavigation } from "@react-navigation/core";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import Container from "../../components/common/Container";
import { pageNames } from "../../constant";
import MainLayout from "../../layout/main";

const Splash = ({ user }) => {
  const { replace } = useNavigation();
  console.log("___Worked From Splash");

  useEffect(() => {
    if (user && user.uid) return replace(pageNames.home.index);
    replace(pageNames.auth);
  }, []);

  return (
    <MainLayout>
      <Container flex={1} alignItems="center" justifyContent="center">
        <Text>Hello</Text>
      </Container>
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Splash);

const styles = StyleSheet.create({});
