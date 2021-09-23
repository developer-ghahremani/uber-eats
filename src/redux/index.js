import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
const persist = persistReducer(
  { key: "root", storage: AsyncStorage },
  combineReducers(require("./reducers"))
);

const store = createStore(persist, applyMiddleware(thunk));
const persistor = persistStore(store);
export { store, persistor };
