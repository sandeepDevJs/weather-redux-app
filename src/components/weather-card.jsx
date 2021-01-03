import React from 'react'
import { connect } from "react-redux"
import {getLogLot} from "../actions/index";

class WeatherCard extends React.Component{

    componentDidMount(){
        this.props.getLogLot()
    }   

    render(){
        return (
            <div className="w-card">
    
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
        wData: state
    }
}

export default connect(mapStateToProps, {getLogLot})(WeatherCard)

