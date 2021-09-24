import React, { memo, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect, useDispatch } from "react-redux";
import { firestore } from "../../firebase";
import { appendOrder, setOrders } from "../../redux/actions/orders";
import { getLog } from "../../utils";

const FireBaseProvider = memo(
  ({ user, children }) => {
    const dispatch = useDispatch();
    getLog("Firebas Provider");
    useEffect(() => {
      signUpFirease();
    }, []);

    const signUpFirease = (params) => {
      firestore.collection("Orders").onSnapshot(
        (snapshot) => {
          const orders = snapshot
            .docChanges()
            .map((item) => item.doc.data())
            .filter((item) => item.user?.uid === user.uid);

          if (orders.length > 1) dispatch(setOrders(orders));
          if (orders.length === 1) dispatch(appendOrder(orders[0]));
        },
        (error) => {
          console.log("error from  listener");
        }
      );
    };

    return children;
  },
  (pre, next) => pre.user === next.user
);

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(FireBaseProvider);

const styles = StyleSheet.create({});
