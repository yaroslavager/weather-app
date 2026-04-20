import "./weatherPage.scss";
import { useEffect } from "react";
import { useWeatherStore } from "../../features/search/modal/store";
import Header from "../../widgets/header/header";
import MainWeatherCard from "../../widgets/mainWeatherCard/mainWeatherCard";
import WeatherDetails from "../../widgets/weatherDetails/weatherDetails";
import WeatherForecast from "../../widgets/weatherForecast/weatherForecast";
function WeatherPage() {
    const fetchWeather = useWeatherStore(state=>state.fetchWeather)
useEffect(()=>{
  fetchWeather("Tbilisi")

},[]);
  return (
    <div className="weather-page__container">
      <Header />
      <main className="weather-page__wrapper">
      <MainWeatherCard />
      <WeatherDetails/>
<WeatherForecast/>
      </main>
    </div>
  );
}

export default WeatherPage;
