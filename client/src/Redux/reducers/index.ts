import { combineReducers } from "redux";
import cartReducer from "./cart";
import userReducer from "./user";
const reducers = combineReducers({
  allReducers: cartReducer,
  allUserReducers: userReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
