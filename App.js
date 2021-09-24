import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { Provider } from "react-redux";
import UberEats from "./src/pages";
import { store, persistor } from "./src/redux";
import { PersistGate } from "redux-persist/integration/react";
import CartModal from "./src/components/modals/carts";
import FireBaseProvider from "./src/provider/firebase";

const App = () => {
  LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <FireBaseProvider>
          <UberEats />
          <CartModal />
        </FireBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
