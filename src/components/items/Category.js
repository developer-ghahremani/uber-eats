import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../common/Container";
import IImage from "../common/IImage";
import IText from "../common/IText";

const CategoryItem = ({ category }) => {
  return (
    <Container alignItems="center" mX={10}>
      <IImage
        style={{ width: 60, height: 60 }}
        resizeMode="contain"
        source={category.image}
      />
      <IText>{category.name}</IText>
    </Container>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
