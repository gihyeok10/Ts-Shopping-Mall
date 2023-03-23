import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistStore } from "redux-persist";

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
export default store;
export type RootReducerType = ReturnType<typeof reducers>;
