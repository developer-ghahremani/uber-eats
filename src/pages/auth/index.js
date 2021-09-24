import React from "react";
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

const Auth = () => {
  getLog("Auth");
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    email: Yup.string().email("Should be email").required("Email is required"),
    password: Yup.string()
      .min(6, "Should be minimum 6 characters")
      .max(30, "Should be maximum 30 characters")
      .required("Password is required"),
  });

  const googleLogin = async (params) => {
    try {
      const data = await auth.signInWithEmailAndPassword(
        "developer.ghahremani@gmail.com",
        "6894100"
      );
      console.log(data.user);
      dispatch(setUser(data.user));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <MainLayout>
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
          onSubmit={() => {}}
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}>
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <Container style={{ width: "80%" }}>
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
              <Row mY={20}>
                <IButton
                  textStyle={{ marginVertical: 15, color: colors.gray2 }}
                  style={{
                    flex: 1,
                    backgroundColor: colors.grayLight1,
                    marginHorizontal: 5,
                  }}
                  onPress={handleSubmit}>
                  Login
                </IButton>
                <IButton
                  textStyle={{ color: colors.grayLight1 }}
                  style={{
                    flex: 1,
                    backgroundColor: colors.green,
                    marginHorizontal: 5,
                  }}
                  onPress={handleSubmit}>
                  Sign Up
                </IButton>
              </Row>
              <IButton onPress={googleLogin}>Google Login</IButton>
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
