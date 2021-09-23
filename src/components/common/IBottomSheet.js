import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BottomSheet } from "react-native-btr";

const IBottomSheet = ({ children, visible, onClose }) => {
  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      {children}
    </BottomSheet>
  );
};

export default IBottomSheet;

const styles = StyleSheet.create({});
