import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../styles/colors";

const IDivider = ({ mY, backgroundColor = colors.gray1 }) => {
  return <View style={{ height: 1, marginVertical: mY, backgroundColor }} />;
};

export default IDivider;

const styles = StyleSheet.create({});
