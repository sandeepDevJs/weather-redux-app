import { FETCH_LOT_LOG, GEO_ACCESS_ERR } from "./types";
import axios from "axios"

export function getLogLot() {
    return (dispatch) => {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                let coords = {lat: position.coords.latitude, long:position.coords.longitude }
                if(coords.lat){
                    axios(`https://api.openweathermap.org/data/2.5/find?lat=${coords.lat}&lon=${coords.long}&appid=c9014916d4671b2e084a339fbda41022&units=metric`)
                    .then(res => {
                        let data = res.data.list[2]
                        dispatch({ type: FETCH_LOT_LOG, payload: data})
                    })
                }
            
            },
            err => {
                dispatch({type: GEO_ACCESS_ERR, payload: err})
            }
        )
    }
} 