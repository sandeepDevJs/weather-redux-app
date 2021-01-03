import { FETCH_LOT_LOG, ERR_404, GEO_ACCESS_ERR } from "../actions/types";

let initialState = {
    city : "--",
    weather: "--",
    temp: "--",
    wind: "--"
}

export const fetchLotLogReducer=(state=initialState, action)=>{
    switch (action.type) {
        case FETCH_LOT_LOG:return action.payload
    
        default:return state
    }
}

export const err404Handler = (state=false, action) =>{
    switch (action.type) {
        case ERR_404: return action.payload
    
        default: return state;
    }
}

export const geoAccessErr = (state=null, action) =>{
    switch (action.type) {
        case GEO_ACCESS_ERR:return action.payload
    
        default:return false
    }
}