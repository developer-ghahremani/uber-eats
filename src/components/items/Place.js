import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../common/Container";
import IDivider from "../common/IDivider";
import IText from "../common/IText";

const PlaceItem = ({ place }) => {
  const { name, country, subcountry } = place;
  return (
    <Container>
      <IText fontSize={16}>{`${name}, ${subcountry}, ${country}`}</IText>
      <IDivider mY={10} />
    </Container>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
