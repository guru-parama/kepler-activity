import { createStore, combineReducers } from "redux";
import keplerGlReducer from "kepler.gl/reducers";

const initialState = {};
const reducers = combineReducers({
  keplerGl: keplerGlReducer,
});

const store = createStore(reducers, initialState);

export default store;
