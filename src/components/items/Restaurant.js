import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../common/Container";
import IImage from "../common/IImage";
import IText from "../common/IText";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../styles/colors";
import Row from "../common/Row";
import IDivider from "../common/IDivider";
import ITouchable from "../common/ITouchable";
import HeartIcon from "../icons/Heart";

const RestaurantItem = ({ onPress, restaurant }) => {
  const {
    id,
    alias,
    name,
    image_url,
    is_closed,
    url,
    review_count,
    categories,
    rating,
    coordinates,
    transactions,
    price,
    location,
    phone,
    display_phone,
    distance,
  } = restaurant;
  return (
    <ITouchable onPress={() => onPress(restaurant)}>
      <Container pX={15}>
        <Container>
          <IImage
            source={{ uri: image_url }}
            style={{ width: "100%", height: 250 }}
          />
          <Container style={styles.fakeContainer}>
            <HeartIcon
              size={20}
              color={colors.white}
              style={{ top: 10, right: 10, position: "absolute" }}
            />
          </Container>
        </Container>
        <Row justifyContent="space-between" alignItems="center" mY={5}>
          <Container>
            <IText>{name}</IText>
            <IText>{alias}</IText>
          </Container>
          <Container style={styles.ratingContainer}>
            <IText>{rating}</IText>
          </Container>
        </Row>
      </Container>
      <IDivider height={50} backgroundColor={colors.grayLight1} />
    </ITouchable>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  fakeContainer: {
    width: "100%",
    height: 250,
    position: "absolute",
    backgroundColor: "#00000020",
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.grayLight1,
  },
});
