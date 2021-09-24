import PropTypes from "prop-types";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import colors from "../../styles/colors";
import IText from "./IText";

/**
 * Input Component
 * @param {objet} params - params of component
 * @param {objet} params.inputStyle - styleObject
 * @param {string} params.error - error message
 * @returns
 */
const IInput = ({ inputStyle, style, error, ...prp }) => {
  return (
    <View style={{ ...style }}>
      <TextInput
        style={{
          backgroundColor: colors.grayLight1,
          fontSize: 16,
          padding: 5,
          borderRadius: 15,
          textAlign: "center",
          ...inputStyle,
        }}
        {...prp}
      />
      {error && <IText color="red">{error}</IText>}
    </View>
  );
};

IInput.propTypes = { ...TextInput.prototype?.props };

export default IInput;

const styles = StyleSheet.create({});
