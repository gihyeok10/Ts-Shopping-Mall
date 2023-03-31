import { combineReducers } from "redux";
import cartReducer from "./cart";
import userReducer from "./user";
import payReducer from "./pay";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root", // localStorage key
  storage, // localStorage
  whitelist: ["allReducers", "allUserReducers", "payReducer"], // target (reducer name)
};

// const reducers = combineReducers({
//   allReducers: cartReducer,
//   allUserReducers: userReducer,
// });

const rootReducer = combineReducers({
  allProductReducer: payReducer,
  allReducers: cartReducer,
  allUserReducers: userReducer,
});
export default persistReducer(persistConfig, rootReducer);
