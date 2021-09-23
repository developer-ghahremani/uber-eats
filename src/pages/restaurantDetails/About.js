import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../components/common/Container";
import IImage from "../../components/common/IImage";
import IText from "../../components/common/IText";
import Row from "../../components/common/Row";
import HeartIcon from "../../components/icons/Heart";
import { getLog } from "../../utils";

const About = () => {
  getLog("About Restaurant");
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const { image_url, name, categories } = params?.restaurant;
  return (
    <Container>
      <Container>
        <IImage
          source={{ uri: image_url }}
          style={{ width: "100%", height: 250 }}
          resizeMode="cover"
        />
        <Container style={styles.fakeContainer} justifyContent="space-between">
          <Row justifyContent="space-between" mX={10} mY={10}>
            <Ionicons
              onPress={goBack}
              name="chevron-back"
              size={22}
              color="white"
            />
            <HeartIcon size={22} color="white" />
          </Row>
        </Container>
      </Container>

      <Container mX={15}>
        <IText fontSize={18}>{name}</IText>
        <IText>{categories.map((item) => item.title).join(", ")}</IText>
      </Container>
    </Container>
  );
};

export default About;

const styles = StyleSheet.create({
  fakeContainer: {
    width: "100%",
    height: 250,
    backgroundColor: "#00000040",
    position: "absolute",
  },
});
