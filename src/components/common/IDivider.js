import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../styles/colors";

const IDivider = ({ mY, backgroundColor = colors.gray1, height = 1 }) => {
  return <View style={{ height, marginVertical: mY, backgroundColor }} />;
};

export default IDivider;

const styles = StyleSheet.create({});
