import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeartIcon = ({ ...prp }) => {
  return <AntDesign name="hearto" {...prp} />;
};

export default HeartIcon;

const styles = StyleSheet.create({});
