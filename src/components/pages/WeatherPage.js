import { useEffect, useState } from "react";
import Error from "../wheathers/Error";

import Search from "../wheathers/Search";
import Weathers from "../wheathers/Weathers";

const WeatherPage = () => {
  const [curCity, setCurCity] = useState("TAIPEI"); // store city that user entered
  const [curWeather, setCurWeather] = useState({}); // store weather
  const [curTemp, setCurTemp] = useState({}); // store temperature
  const [error, setError] = useState(false);

  useEffect(() => {
    // show initial city weather to the screen
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${curCity}&appid=6dfbe662264ad06afa7627224fc659c1`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setCurWeather(responseData.weather[0]);
        setCurTemp(responseData.main);
        setCurCity(responseData.name);
      });
  }, []);

  const searchCityWeatherHandler = (city) => {
    // fetch the city weather that user was entered
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6dfbe662264ad06afa7627224fc659c1`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        // console.log(responseData);
        setCurWeather(responseData.weather[0]);
        setCurTemp(responseData.main);
        setCurCity(responseData.name);
      })
      .catch((err) => {
        // when error show the error modal
        setError(true);
      });
  };

  return (
    <main>
      {error && <Error setError={setError} />}
      <Search onSearchWeather={searchCityWeatherHandler} />
      <Weathers curCity={curCity} curWeather={curWeather} curTemp={curTemp} />
    </main>
  );
};

export default WeatherPage;
