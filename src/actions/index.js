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
                        let payLoadData = {
                            city:data.name,
                            weather:data.weather[0].main,
                            wind:data.wind.speed,
                            temp:data.main.temp
                        }
                        dispatch({ type: FETCH_LOT_LOG, payload: payLoadData})
                    })
                }
            
            },
            err => {
                dispatch({type: GEO_ACCESS_ERR, payload: err})
            }
        )
    }
} 

export function fetchByCity(cityName) {
    return (dispatch) => {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                let coords = {lat: position.coords.latitude, long:position.coords.longitude }
                if(coords.lat){
                    axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c9014916d4671b2e084a339fbda41022&units=metric`)
                    .then(res => {
                        let data = res.data
                        let payLoadData = {
                            city:data.name,
                            weather:data.weather[0].main,
                            wind:data.wind.speed,
                            temp:data.main.temp
                        }
                        dispatch({ type: FETCH_LOT_LOG, payload: payLoadData})
                    })
                    .catch(err =>console.log("er : ", err))
                }
            
            },
            err => {
                dispatch({type: GEO_ACCESS_ERR, payload: err})
            }
        )
    }
}
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}