import { useState } from "react";
import React from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=53eed2d577a920f18118c4936697a8dc`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      console.log(url);
      axios.get(url).then((response) => {
        setData(response.data);
        console.table(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          type="text"
          placeholder="Enter Location"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}C</h1> : null}
          </div>
          <div className="description">
            <p>{data.weather ? <p>{data.weather[0].main}</p> : null}</p>
          </div>
          {data.name !== undefined && (
            <div className="bottom">
              <div className="feels">
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}</p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity.toFixed()}</p>
                ) : null}
                <p>humidity</p>
              </div>
              <div className="wind">
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()}MPH</p>
                ) : null}
                <p>Wind</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
