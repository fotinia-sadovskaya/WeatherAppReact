import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Dnipro",
    temperature: -4,
    date: "Tuesday 21:00",
    description: "Clear sky",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 49,
    wind: 4
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter your city..."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-info w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <span>{weatherData.date}</span>
          </li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <div className="temperature">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/" className="active">
                  °C
                </a>{" "}
                | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
