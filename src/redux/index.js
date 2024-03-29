import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { composeWithDevTools } from "redux-devtools-extension";
const persist = persistReducer(
  { key: "root-1", storage: AsyncStorage },
  combineReducers(require("./reducers"))
);

const store = createStore(persist, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);
// store.subscribe(() => console.log("changed", store.getState().warningModal));
export { store, persistor };
