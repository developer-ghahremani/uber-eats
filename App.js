import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import UberEats from "./src/pages";
import { store, persistor } from "./src/redux";
import { PersistGate } from "redux-persist/integration/react";
import CartModal from "./src/components/modals/carts";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <UberEats />
        <CartModal />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
