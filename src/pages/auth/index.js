import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MainLayout from "../../layout/main";
import { getLog } from "../../utils";
import Container from "../../components/common/Container";
import IButton from "../../components/items/IButton";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions/user";
import { Formik } from "formik";
import IInput from "../../components/common/IInput";
import colors from "../../styles/colors";
import * as Yup from "yup";
import Row from "../../components/common/Row";
import IImage from "../../components/common/IImage";
import { StatusBar } from "expo-status-bar";
import IText from "../../components/common/IText";
import { constants, pageNames } from "../../constant";
import ITouchable from "../../components/common/ITouchable";
import { nodeFromRef } from "react-native-shared-element";
import { useNavigation } from "@react-navigation/core";

const Auth = () => {
  getLog("Auth");
  const { replace } = useNavigation();
  const [state, setState] = useState({ action: constants.login, error: "" });
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    email: Yup.string().email("Should be email").required("Email is required"),
    password: Yup.string()
      .min(6, "Should be minimum 6 characters")
      .max(30, "Should be maximum 30 characters")
      .required("Password is required"),
  });

  const googleLogin = async (params) => {
    const { email, password } = params;
    try {
      const data = await auth.signInWithEmailAndPassword(email, password);
      dispatch(setUser(data.user));
      replace(pageNames.home.index);
    } catch (error) {
      setState((s) => ({ ...s, error: error.message }));
    }
  };

  const googleSignUp = async (params) => {
    const { email, password } = params;
    try {
      const data = await auth.createUserWithEmailAndPassword(email, password);
      dispatch(setUser(data.user));
      replace(pageNames.home.index);
    } catch (error) {
      setState((s) => ({ ...s, error: error.message }));
    }
  };

  const changeActionType = (action) => {
    setState((s) => ({ ...s, action }));
  };

  const handleSubmit = (params) => {
    if (state.action === constants.signup) return googleSignUp(params);
    googleLogin(params);
  };

  return (
    <MainLayout>
      <StatusBar hidden animated />
      <Container
        flex={1}
        justifyContent="space-between"
        alignItems="center"
        backgroundColor={colors.black}>
        <IImage
          source={require("./../../../assets/images/uber-eats-logo.png")}
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
        />
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}>
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <Container style={{ width: "80%" }}>
              <Row mY={20}>
                <ITouchable
                  onPress={() => {
                    changeActionType(constants.login);
                  }}
                  style={{
                    flex: 1,
                    alignItems: "center",
                    marginHorizontal: 10,
                  }}>
                  <IText fontSize={18} color={colors.grayLight1}>
                    Login
                  </IText>
                  <View
                    style={{
                      height: 1,
                      backgroundColor:
                        state.action === constants.login
                          ? colors.green
                          : colors.grayLight1,
                      width: "100%",
                    }}
                  />
                </ITouchable>

                <ITouchable
                  onPress={() => {
                    changeActionType(constants.signup);
                  }}
                  style={{
                    flex: 1,
                    alignItems: "center",
                    marginHorizontal: 10,
                  }}>
                  <IText fontSize={18} color={colors.grayLight1}>
                    Signup
                  </IText>
                  <View
                    style={{
                      height: 1,
                      backgroundColor:
                        state.action === constants.signup
                          ? colors.green
                          : colors.grayLight1,
                      width: "100%",
                    }}
                  />
                </ITouchable>
              </Row>
              <IInput
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                error={touched.email && errors.email}
              />
              <IInput
                style={{
                  marginVertical: 10,
                }}
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange("password")}
                error={touched.password && errors.password}
              />

              <IButton
                textStyle={{ color: colors.grayLight1 }}
                style={{
                  backgroundColor: colors.green,
                  marginTop: 20,
                }}
                textStyle={{ marginVertical: 10, color: "white" }}
                onPress={handleSubmit}>
                Submit
              </IButton>
              <IText color="red">{state.error}</IText>
            </Container>
          )}
        </Formik>
        <View style={{ height: 150 }} />
      </Container>
    </MainLayout>
  );
};

export default Auth;

const styles = StyleSheet.create({});
