import { combineReducers } from "redux";
import cartReducer from "./cart";

const reducers = combineReducers({
    allReducers:cartReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;