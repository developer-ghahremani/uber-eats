import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View, ViewPropTypes } from "react-native";

/**
 *
 * @param {object} params - params for this component
 * @param {"center"|"flex-start"|"flex-end"} params.alignItems - alignment
 * @param {"center"|"space-between"|"flex-start"|"flex-end"} params.justifyContent - justify cotent
 * @param {number} params.mX - margin horizontal
 * @param {number} params.mY - margin vertical
 * @param {number} params.pX  - padding horizontal
 * @param {number} params.pY - padding vertical
 * @param {number} params.flex - flex
 * @param {string} params.backgroundColor - background color
 * @param {object} params.style - style
 * @returns
 */
const Container = ({
  alignItems,
  justifyContent,
  children,
  mX,
  mY,
  pX,
  pY,
  flex,
  backgroundColor,
  style,
}) => {
  return (
    <View
      style={{
        marginHorizontal: mX,
        marginVertical: mY,
        paddingHorizontal: pX,
        paddingVertical: pY,
        alignItems,
        justifyContent,
        flex,
        backgroundColor,
        ...style,
      }}>
      {children}
    </View>
  );
};

Container.propTypes = {
  alignItems: PropTypes.string,
  flex: PropTypes.number,
  justifyContent: PropTypes.string,
  mX: PropTypes.number,
  mY: PropTypes.number,
  pX: PropTypes.number,
  pY: PropTypes.number,
  ...ViewPropTypes,
};

export default Container;
