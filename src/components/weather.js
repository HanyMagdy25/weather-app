import React from 'react'
import "./weather.css";

const Weather = ({cityName,countryName,tempMin,tempMax,temp,main,description}) => {

    return (
        <div className="container"> 
            <div className="cards">
                <h1 className="city">{cityName}, {countryName}</h1>
                <h1 className="icon"><i className="fas fa-cloud"></i></h1>
                <h1 className="deg">{temp} &deg;C</h1>
                <h3 className="min-max">Min {tempMin}&deg; | {tempMax}&deg; Max</h3>
                <h2 className="main">{main}</h2>
                <h4 className="description">{description}</h4>
            </div>
        </div>
    )
}

export default Weather
