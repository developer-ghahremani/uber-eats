import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import IScrollView from "../../../components/common/IScrollView";
import CategoryItem from "../../../components/items/Category";
import { categories } from "../../../constant";

const Categories = memo(
  () => {
    console.log("___Worked From Home/Categories");
    return (
      <IScrollView horizontal style={{ marginVertical: 10 }}>
        {categories.map((category) => (
          <CategoryItem key={category.name} category={category} />
        ))}
      </IScrollView>
    );
  },
  () => true
);

export default Categories;

const styles = StyleSheet.create({});
