import React, { memo, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import MainLayout from "../../../layout/main";

const Orders = memo(
  ({ orders }) => {
    console.log("___Worked From Home/Orders");
    console.log(orders.length, "residam");
    return (
      <MainLayout>
        <Text>{orders.length}</Text>
      </MainLayout>
    );
  },
  (pre, next) => !pre.navigation.isFocused()
);

const mapStateToProps = (state) => ({
  orders: state.orders,
});

export default connect(mapStateToProps, null)(Orders);

const styles = StyleSheet.create({});
