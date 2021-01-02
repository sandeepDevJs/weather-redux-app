import React from 'react'
import { connect } from "react-redux"
import {getLogLot} from "../actions/index";

class WeatherCard extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            city : "",
            weather: "",
            temp:"",
            wind:""
        }
    }

    componentDidMount(){
        this.props.getLogLot()
        console.log("data", this.props.latlog)
        this.setState({
            city : this.props.latlog.name,
            weather: this.props.latlog.weather[0].main,
            temp: this.props.latlog.main.temp,
            wind: this.props.latlog.wind.speed
        })
    }

    render(){
        console.log(this.props.latlog)
        return (
            <div className="w-card">
    
                <h2>{this.state.city}</h2>
                <h3>{this.state.weather}<span>Wind {this.state.wind}m/s</span></h3>
                <br/>
                <h1>{this.state.temp}°C</h1>
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
        latlog: state
    }
}

export default connect(mapStateToProps, {getLogLot})(WeatherCard)

// window.navigator.geolocation.getCurrentPosition(
//     position => this.setState({lat: position.coords.latitude }), 
//     err => this.setState({errorMsg: err.message })
// );
