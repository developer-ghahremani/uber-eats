import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../common/Container";
import ICheckBox from "../common/ICheckBox";
import IImage from "../common/IImage";
import IText from "../common/IText";
import ITouchable from "../common/ITouchable";
import Row from "../common/Row";

const MenuItem = ({ isSelected, menu, onPress }) => {
  const { title, description, price, image } = menu;

  return (
    <ITouchable onPress={() => onPress(menu)}>
      <Container mY={10}>
        <Row alignItems="center" mX={15}>
          <ICheckBox checked={isSelected} style={{ marginHorizontal: 5 }} />
          <Container justifyContent="space-between" style={{ flex: 1 }}>
            <IText>{title}</IText>
            <IText>{description}</IText>
            <IText>{`$ ${price}`}</IText>
          </Container>
          <IImage
            source={{ uri: image }}
            style={{ width: 120, height: 120, borderRadius: 30 }}
          />
        </Row>
      </Container>
    </ITouchable>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
