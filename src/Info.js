import React from "react";
import Date from "./Date";
import Icon from "./Icon";
import "./Weather.css";

export default function Info(props) {
  return (
  <div>
  <h1>{props.data.city}</h1>
  <br/>
    <div className="row weatherInfo">
      <div classname="left-col"> 
      <span className="WeatherTemperature">
            <div className="temperature">
              {" "}
              {Math.round(props.data.temperature)}{" "}° 
            <span className="unit"> C
              </span></div>
  </span>
      <ul>
        <li> Last updated: <Date date={props.data.date} /></li>
        <li className="text-capitalize"> {props.data.description}</li> 
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {Math.round(props.data.wind)} km/h</li>
      </ul>
      </div>

        <div className="right-col">
            <div className="icon WeatherTemperature">
            <Icon code={props.data.icon} size={50} />
          </div>
            </div>
        </div>
        </div>
 
  );
}