import React from "react";
import { StyleSheet, Text, View, Image, ImagePropTypes } from "react-native";

/**
 * Image Component
 * @param {params} params - component's params
 * @returns
 */
const IImage = ({ ...prp }) => <Image {...prp} />;

IImage.propTypes = {
  // ...Image.prototype?.props,
  ...ImagePropTypes,
};

export default IImage;

const styles = StyleSheet.create({});
