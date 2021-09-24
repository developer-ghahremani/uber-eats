import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View, TextPropTypes } from "react-native";

/**
 *  Text Componet
 * @param {object} params - params  of component
 * @param {string} params.color - text color
 * @param {number} params.fontSize  - text font size
 * @param {boolean} params.bold  - bold font
 * @param {object} params.style  - text style
 * @returns
 */
const IText = ({ color, fontSize, bold, style, children }) => {
  return (
    <Text
      style={{ color, fontSize, fontFamily: bold ? "sfBold" : "sf", ...style }}>
      {children}
    </Text>
  );
};

IText.propTypes = {
  bold: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  ...TextPropTypes,
};

export default IText;

const styles = StyleSheet.create({});
