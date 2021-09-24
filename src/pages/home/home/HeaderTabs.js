import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import Container from "../../../components/common/Container";
import IText from "../../../components/common/IText";
import ITouchable from "../../../components/common/ITouchable";
import Row from "../../../components/common/Row";
import { pageNames, transactionTypes } from "../../../constant";
import { setUser } from "../../../redux/actions/user";
import { setWarningModal } from "../../../redux/actions/warning";
import colors from "../../../styles/colors";
import { capitalise } from "../../../utils";

const HeaderTabs = memo(
  ({ onChangeTrasactionType, transactionType }) => {
    console.log("___Worked From Home/HeaderTabs");
    const { replace } = useNavigation();
    const dispatch = useDispatch();
    const handleLogout = (params) => {
      dispatch(
        setWarningModal({
          visible: true,
          message: "Are you sure to logout?",
          title: "Logout",
          onPressYes: logOut,
        })
      );
    };

    const logOut = () => {
      dispatch(setUser(null));
      replace(pageNames.auth);
    };

    return (
      <Row justifyContent="space-between" mY={10} mX={15} alignItems="center">
        <View style={{ width: 20 }} />
        <Row>
          {transactionTypes.map((trs) => (
            <ITouchable key={trs} onPress={() => onChangeTrasactionType(trs)}>
              <Container
                style={{
                  borderRadius: 20,
                  paddingVertical: 7,
                  backgroundColor:
                    trs === transactionType ? colors.black : colors.white,
                  paddingHorizontal: 20,
                }}>
                <IText
                  style={{ fontWeight: "bold" }}
                  color={trs === transactionType ? colors.white : colors.black}>
                  {capitalise(trs)}
                </IText>
              </Container>
            </ITouchable>
          ))}
        </Row>
        <ITouchable onPress={handleLogout}>
          <AntDesign name="logout" size={20} />
        </ITouchable>
      </Row>
    );
  },
  (prev, next) => prev.transactionType === next.transactionType
);

export default HeaderTabs;

const styles = StyleSheet.create({});
