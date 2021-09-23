import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getRestaurants } from "../../../api/restaurants";
import Container from "../../../components/common/Container";
import IScrollView from "../../../components/common/IScrollView";
import MainLayout from "../../../layout/main";
import Categories from "./Categories";
import HeaderTabs from "./HeaderTabs";
import SearchBar from "./SearchBar";

const Home = () => {
  console.log("___Worked From Home/Home");
  const [state, setState] = useState({
    transactionType: "delivery",
    restaurants: [],
  });
  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = async (params) => {
    try {
      const { data } = await getRestaurants();
      setState((s) => ({ ...s, restaurants: data.businesses }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const onChangeTrasactionType = (transactionType) => {
    setState((s) => ({ ...s, transactionType }));
  };

  return (
    <MainLayout>
      <HeaderTabs
        onChangeTrasactionType={onChangeTrasactionType}
        transactionType={state.transactionType}
      />
      <IScrollView>
        <SearchBar />
        <Categories />
      </IScrollView>
    </MainLayout>
  );
};

export default Home;

const styles = StyleSheet.create({});
