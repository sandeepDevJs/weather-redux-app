import { FETCH_LOT_LOG, GEO_ACCESS_ERR } from "../actions/types";

let initialState = {
    city : "--",
    weather: "--",
    temp: "--",
    wind: "--"
}

export const fetchLotLogReducer=(state=initialState, action)=>{
    switch (action.type) {
        case FETCH_LOT_LOG:return action.payload

        case GEO_ACCESS_ERR:return action.payload
    
        default:return state
    }
}