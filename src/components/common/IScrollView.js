import PropTypes from "prop-types";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ScrollViewProps,
} from "react-native";

/**
 * Scroll View Component
 * @param {object} params - params of component
 * @returns
 */
const IScrollView = ({ children, ...prp }) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} {...prp}>
      {children}
    </ScrollView>
  );
};

IScrollView.propTypes = {
  children: PropTypes.any,
  ...ScrollView.prototype?.props,
};

export default IScrollView;
