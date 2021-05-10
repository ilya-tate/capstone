import * as weather from "../weather.json";
console.log(weather.current.weather.main);

const weatherData = () => {
  return (

    <div class="card">
      <div class="card-body">
        <p class="card-text">
          <p>{` ${weather.lat}, ${weather.lon} `}</p>
          <p>{new Date(weather.current.dt).toLocaleTimeString("en-US")}</p>
          <h2>{`${weather.current.temp}° F`}</h2>
          <h2>{weather.current.weather.icon}</h2>
          <p>{` Feels like ${weather.current.feels_like} `}</p>
        </p>
      </div>
    </div>
  );
};

export default weatherData;
