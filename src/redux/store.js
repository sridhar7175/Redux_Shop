import { createStore, combineReducers } from "redux";
//import { products} from "./reducer";

const rootReducer = combineReducers({
  
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
