import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getRestaurants } from "../../../api/restaurants";
import IScrollView from "../../../components/common/IScrollView";
import RestaurantItem from "../../../components/items/Restaurant";
import { pageNames } from "../../../constant";
import MainLayout from "../../../layout/main";
import Categories from "./Categories";
import HeaderTabs from "./HeaderTabs";
import SearchBar from "./SearchBar";

const Home = () => {
  console.log("___Worked From Home/Home");
  const { navigate } = useNavigation();
  const [state, setState] = useState({
    transactionType: "delivery",
    restaurants: [],
    place: "San Diego",
  });

  useEffect(() => {
    if (state.place.length > 2) loadRestaurants();
  }, [state.place]);

  const loadRestaurants = async () => {
    try {
      const { data } = await getRestaurants(state.place);
      setState((s) => ({ ...s, restaurants: data.businesses }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const onChangeTrasactionType = (transactionType) => {
    setState((s) => ({ ...s, transactionType }));
  };

  const onPressRestaurant = (restaurant) => {
    navigate(pageNames.restaurantDetails.index, { restaurant });
  };
  const handleChangePlace = (place) => {
    setState((s) => ({ ...s, place: place.name }));
  };

  return (
    <MainLayout>
      <HeaderTabs
        onChangeTrasactionType={onChangeTrasactionType}
        transactionType={state.transactionType}
      />
      <SearchBar place={state.place} onChangePlace={handleChangePlace} />
      <IScrollView>
        <Categories />
        {[...state.restaurants]
          .filter((item) => item.transactions.includes(state.transactionType))
          .map((restarant) => (
            <RestaurantItem
              onPress={onPressRestaurant}
              restaurant={restarant}
              key={restarant.id}
            />
          ))}
      </IScrollView>
    </MainLayout>
  );
};

export default Home;

const styles = StyleSheet.create({});
