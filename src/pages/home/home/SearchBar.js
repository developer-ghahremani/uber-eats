import React, { memo, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import Container from "../../../components/common/Container";
import Row from "../../../components/common/Row";
import { capitalise } from "../../../utils";
import WorldCities from "./../../../../worldCities.json";
import { AntDesign, Entypo } from "@expo/vector-icons";
import colors from "../../../styles/colors";
import ITouchable from "../../../components/common/ITouchable";
import IText from "../../../components/common/IText";
import PlaceItem from "../../../components/items/Place";

const SearchBar = memo(
  ({ place, onChangePlace }) => {
    console.log("___Worked From Home/SeatchBar");
    const [state, setState] = useState({ cities: [] });
    const handlePressPlace = (place) => {
      onChangePlace(place);
    };

    return (
      <Container mX={15}>
        <Row
          alignItems="center"
          backgroundColor={colors.grayLight1}
          style={{
            borderRadius: 30,
            paddingVertical: 12,
          }}>
          <Entypo
            size={30}
            name="location-pin"
            style={{ marginHorizontal: 10 }}
          />
          <TextInput
            placeholder="Search"
            style={{ flex: 1 }}
            onChangeText={(text) => {
              if (text.length < 2)
                return setState((s) => ({ ...s, cities: [] }));

              if (text.length > 2)
                setState((s) => ({
                  ...s,
                  cities: WorldCities.filter(
                    (item) =>
                      item.name.startsWith(capitalise(text)) ||
                      item.country.startsWith(capitalise(text)) ||
                      item.subcountry?.startsWith(capitalise(text))
                  ).slice(0, 5),
                }));
            }}
          />
          <ITouchable>
            <Row
              alignItems="center"
              backgroundColor={colors.white}
              style={{
                borderRadius: 20,
                paddingVertical: 10,
                paddingHorizontal: 15,
                marginHorizontal: 5,
              }}>
              <AntDesign name="clockcircle" size={15} />
              <IText style={{ marginHorizontal: 5 }}>{place}</IText>
            </Row>
          </ITouchable>
        </Row>
        {state.cities.map((item) => (
          <PlaceItem
            onPress={handlePressPlace}
            key={JSON.stringify(item)}
            place={item}
          />
        ))}
      </Container>
    );
  },
  (pre, next) => pre.place === next.place
);

export default SearchBar;

const styles = StyleSheet.create({});
