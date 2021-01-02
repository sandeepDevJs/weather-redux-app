import { createStore, applyMiddleware } from "redux"
import { fetchLotLogReducer } from "../reducers";
import thunk from "redux-thunk";

export default createStore(fetchLotLogReducer, applyMiddleware(thunk))