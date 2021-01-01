import React from 'react'

export default function WeatherCard() {
    return (
        <div class="w-card">

            <h2>Brussels</h2>
            <h3>Cloudy<span>Wind 10km/h <span class="dot">•</span> Precip %</span></h3>
            <h1>23°</h1>
            <div class="sky">
                <div class="sun"></div>
                <div class="cloud">
                    <div class="circle-small"></div>
                    <div class="circle-tall"></div>
                    <div class="circle-medium"></div>
                </div>
            </div>
        </div>
    )
}
