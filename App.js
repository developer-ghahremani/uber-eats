import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { Provider } from "react-redux";
import UberEats from "./src/pages";
import { store, persistor } from "./src/redux";
import { PersistGate } from "redux-persist/integration/react";
import CartModal from "./src/components/modals/carts";
import FireBaseProvider from "./src/provider/firebase";
import WarningModal from "./src/components/modals/Warning";
import { useFonts } from "expo-font";

const App = () => {
  LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
  const [fontsLoaded] = useFonts({
    sf: require("./assets/fonts/sf/SF-Pro-Text-Medium.otf"),
    sfBold: require("./assets/fonts/sf/SF-Pro-Text-Bold.otf"),
  });

  if (!fontsLoaded) return null;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <FireBaseProvider>
          <UberEats />
          <CartModal />
          <WarningModal />
        </FireBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
