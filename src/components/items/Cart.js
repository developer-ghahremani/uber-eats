import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../styles/colors";
import Container from "../common/Container";
import IDivider from "../common/IDivider";
import IText from "../common/IText";
import Row from "../common/Row";

const CartItem = ({ cart }) => {
  const { product } = cart;
  return (
    <Container mX={10} mY={15}>
      <Row justifyContent="space-between" mY={15}>
        <IText fontSize={18}>{product.title}</IText>
        <IText color={colors.gray1}>{`$${product.price}`}</IText>
      </Row>
      <IDivider />
    </Container>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
