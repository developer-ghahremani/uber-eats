import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../styles/colors";

const ICheckBox = ({ size = 25, checked = false, color = "red", style }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: color,
        backgroundColor: checked ? color : colors.white,
        ...style,
      }}></View>
  );
};

export default ICheckBox;

const styles = StyleSheet.create({});
