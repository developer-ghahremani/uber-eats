import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../common/Container";
import IText from "../common/IText";
import ITouchable from "../common/ITouchable";

const IButton = ({ onPress, style, textStyle, children }) => {
  return (
    <ITouchable
      onPress={onPress}
      style={{
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        ...style,
      }}>
      <IText style={textStyle}>{children}</IText>
    </ITouchable>
  );
};

export default IButton;

const styles = StyleSheet.create({});
