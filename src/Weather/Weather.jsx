import React, { useState } from "react";
import axios from 'axios'
export default function Weather(){
    const [city, setCity]=useState();
    const [weather, setWeather]=useState();
    const handleCityChange = ()=>{
        setCity(event.target.value)
    }
    const fetchWeather = async ()=>{
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'4d885edd6cae369def5f3bcd55228c50'}`)
            setWeather(response);
            
        }
        catch(error){
            console.log("Error fetching weather data",error);   
        }
    }
    const handleClick = (event)=>{
        fetchWeather();
    }
    return(
        <div className="Weather-container">
            <input type="text" placeholder="Enter city name" value={city} onChange={handleCityChange}/>
            <br />
            <button onClick={handleClick}>Get Weather</button>
            {weather &&<>
            <div className="weather_info">
            <h3>{weather.data.name}</h3>
            <p>Temp is {weather.data.main.temp}</p>
            <p>{weather.data.weather[0].description}</p>
            </div></>}
        </div>
    )
}