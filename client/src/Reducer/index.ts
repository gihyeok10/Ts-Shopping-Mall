import { combineReducers } from "redux";
import todo from "../Reducer/Reducer/reducer";
import { Todo } from "../Reducer/Type/types";

export type RootState = {
  todo: Todo;
};

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;