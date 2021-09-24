import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../common/Container";
import IDivider from "../common/IDivider";
import IText from "../common/IText";
import ITouchable from "../common/ITouchable";

const PlaceItem = ({ place, onPress }) => {
  const { name, country, subcountry } = place;

  const handlePress = () => {
    onPress(place);
  };

  return (
    <ITouchable onPress={handlePress}>
      <Container>
        <IText fontSize={16}>{`${name}, ${subcountry}, ${country}`}</IText>
        <IDivider mY={10} />
      </Container>
    </ITouchable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
