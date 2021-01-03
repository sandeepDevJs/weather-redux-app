import React from 'react'
import Nav from "./Nav"
import SearchBox from "./SearchBox";
import WeatherCard from './weather-card';

export default function Container() {
    return (
        <>
            <Nav/>
            <SearchBox/>
            <WeatherCard/>
        </>
    )
}
