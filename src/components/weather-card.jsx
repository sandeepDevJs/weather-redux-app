import React from 'react'
import { connect } from "react-redux"
import {getLogLot, errHandler} from "../actions/index";
import Err from "./fetchErr"

class WeatherCard extends React.Component{

    componentDidMount(){
        this.props.getLogLot()
    }   

    render(){
        let CustomErr;
        if (this.props.err404) {
            CustomErr =  <Err/> 
        }

        if (this.props.geoErr) {
            CustomErr =  <Err msg={this.props.geoErr.message}/> 
        }
        // console.log("wcad:",this.props.err404)
        return (
            <div className="w-card">
                { CustomErr }
                <h2>{this.props.wData.city}</h2>
                <h3>{this.props.wData.weather}<span>Wind {this.props.wData.wind}m/s</span></h3>
                <br/>
                <h1>{this.props.wData.temp}°C</h1>
                <div className="sky">
                    <div className="sun"></div>
                    <div className="cloud">
                        <div className="circle-small"></div>
                        <div className="circle-tall"></div>
                        <div className="circle-medium"></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        wData: state.weatherData,
        err404: state.err404,
        geoErr: state.geoAccessErr
    }
}

export default connect(mapStateToProps, {getLogLot, errHandler})(WeatherCard)

