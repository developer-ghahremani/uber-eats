import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ITouchable = ({ children, ...prp }) => {
  return <TouchableOpacity {...prp}>{children}</TouchableOpacity>;
};

ITouchable.propTypes = {
  children: PropTypes.any,
  ...TouchableOpacity.prototype?.props,
};

export default ITouchable;

const styles = StyleSheet.create({});
