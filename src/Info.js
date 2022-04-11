import React from "react";
import Date from "./Date";
import Icon from "./Icon";
import "./Weather.css";

export default function Info(props) {
  return (
    <div className="weatherInfo">
      <div classname="col-6">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <Date date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="helper">
            <Icon code={props.data.icon} size={52} />
          </div>
          <span className="WeatherTemperature">
            <div className="temperature">
              {" "}
              {Math.round(props.data.temperature)}{" "}
            </div>{" "}
            <div className="unit">°C </div>
          </span>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}