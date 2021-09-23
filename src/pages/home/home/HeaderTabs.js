import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../../components/common/Container";
import IText from "../../../components/common/IText";
import ITouchable from "../../../components/common/ITouchable";
import Row from "../../../components/common/Row";
import { transactionTypes } from "../../../constant";
import colors from "../../../styles/colors";
import { capitalise } from "../../../utils";

const HeaderTabs = memo(
  ({ onChangeTrasactionType, transactionType }) => {
    console.log("___Worked From Home/HeaderTabs");
    return (
      <Row justifyContent="center" mY={10}>
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
    );
  },
  (prev, next) => prev.transactionType === next.transactionType
);

export default HeaderTabs;

const styles = StyleSheet.create({});
