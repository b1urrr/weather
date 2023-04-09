import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { WiDaySunny, WiDayCloudy, WiCloud, WiCloudy } from "react-icons/wi";


import './current.css';


const Current = () => {

    // Populates the weather in Sofia on page load
    const onLoad = useEffect(() => {
        getWeather();
      }, []);

    // Updates city 
    const [city, setCity] = useState("София")
    const [updatedCity, setUpdatedCity] = useState(city)

    // Updates the temperature and icon
    const [temp, setTemp] = useState("")
    const [weatherIcon, setWeatherIcon] = useState("")
  
    // API url
    // Firebase does not support API secrets as default
    // and since the key is free and the workaround is lenghty I left it exposed
    const apiKey = "edf8f78a4f9988cc249356922711fae1"
    const units = "&units=metric"
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + units
    
    // Handles the change in the input
    const handleChange = (event) => {
        setCity(event.target.value)
    }

    // When the button is clicked it sets the input city and makes a new API call for that city
    const handleClick = () => {
        setUpdatedCity(city)
        getWeather()
    }

    // API call function
    const getWeather = () => {
        Axios.get(apiUrl)
        .then((res) => {
            
            // Get temperature
            setTemp(Math.round(res.data.main.temp))
            // Get icon of the weather type
            setWeatherIcon(res.data.weather[0].icon)
            console.log(weatherIcon)
        }
        )


}
// Switch the default OpenWeatherMap icons with React-WeatherIcons
const nightColor = '#0C090A';
const dayColor = '#FDB813';
    switch (weatherIcon) {
        case '01d':
            var displayIcon = <WiDaySunny size={300} color={dayColor}/>
            break;
        case '01n':
            displayIcon = <WiDaySunny size={300} color={nightColor}/>
            break;
        case '02d':
            displayIcon = <WiDayCloudy size={300} color={dayColor}/>
            break;
        case '02n':
            displayIcon = <WiDayCloudy size={300} color={nightColor}/>
            break;
        case '03d':
            displayIcon = <WiCloud size={300} color={dayColor}/>
            break;
        case '03n':
            displayIcon = <WiCloud size={300} color={nightColor}/>
            break;
        case '04d':
            displayIcon = <WiCloudy size={300} color={dayColor}/>
            break;
        case '04n':
            displayIcon = <WiCloudy size={300} color={nightColor}/>
            break;
    
        default:
            break;
    }

    return (
        <div className='wg__current'>
            <div className='wg__current-city'>
                <div className='wg__current-city_name'>
                    <h1>{updatedCity}</h1>
                </div>
            
                <div className='wg__current-city_icon'>
                    <h1>{temp}°</h1>
                    <div className='wg__current-city_icon-inner'>{displayIcon}</div>
                    
                </div>
            </div>
            {/* <div className='wg__current-temp'>
                <input 
                type="text"
                placeholder="Type any city in Bulgaria"
                onChange={handleChange}
                />
                <button 
                onClick={handleClick}>
                Get Weather
                </button>
            </div> */}

        </div>
    );
}

export default Current
