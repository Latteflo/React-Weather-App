import React, { useState } from "react"
import "./Weather.css"
import axios from "axios"
import Info from "./Info"
import Forecast from "./Forecast"

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false })
  const [city, setCity] = useState(props.defaultCity)
  function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
    })
  }

  function search() {
    const apiKey = "2aa25d5871633c04023434f8966eb7bc"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  function handleCityChange(event) {
    setCity(event.target.value)
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form id="search-form" class="mb-3" onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-9">
                <input type="search" 
                placeholder="Type a city.."
                class="form-control" 
                id="city-input" 
                autocomplete="off" 
                 autoFocus="on"
                onChange={handleCityChange}
                >
                    </input>
                </div>
                 <div class="col-3">
                <button type="submit" class="btn btn-primary sm submit-form" id="location-search">
                  Submit
                </button>
            </div>
          </div>
        </form>
        <Info data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    )
  } else {
    search()

    return "Loading..."
  }
}
