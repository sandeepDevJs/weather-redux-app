import { createStore, applyMiddleware, combineReducers } from "redux"
import { fetchLotLogReducer, err404Handler, geoAccessErr } from "../reducers";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    weatherData: fetchLotLogReducer,
    err404: err404Handler,
    geoAccessErr
})

export default createStore(rootReducer, applyMiddleware(thunk))