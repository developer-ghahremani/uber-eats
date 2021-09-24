import React, { memo, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import IScrollView from "../../../components/common/IScrollView";
import OrderItem from "../../../components/items/OrderItem";
import MainLayout from "../../../layout/main";

const Orders = memo(
  ({ orders }) => {
    console.log("___Worked From Home/Orders");

    return (
      <MainLayout>
        <IScrollView>
          {orders.map((item) => (
            <OrderItem order={item} key={item.id} />
          ))}
        </IScrollView>
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
