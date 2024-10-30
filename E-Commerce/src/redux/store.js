import { createStore, applyMiddleware, combineReducers } from "redux";
import clientReducer from "./reducers/clientReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/shoppingCartReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
