import "./weatherPage.scss";
import Header from "../../widgets/header/header";
import MainWeatherCard from "../../widgets/mainWeatherCard/mainWeatherCard";
import WeatherDetails from "../../widgets/weatherDetails/weatherDetails";
import WeatherForecast from "../../widgets/weatherForecast/weatherForecast";
function WeatherPage() {
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
