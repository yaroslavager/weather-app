import { useWeatherStore } from "../../features/search/modal/store";

import "./weatherDetails.scss";

function WeatherDetails() {
  const data = useWeatherStore((state) => state.data);
  if (!data) return;
  return (
    <section className="weather-details__main-wrapper">
      <h3>Today`s Highlight</h3>
      <div className="weather-details__wrapper">
        <div className="weather-details__left-wrapper">
          <div className="weather-details__info-wrapper">
             <div className="weather-details__info">
           img <p className="weather-details__title">Wind</p>
            </div>
            
            </div>
          <div className="weather-details__info-wrapper">
<div className="weather-details__info">img <p className="weather-details__title">Humidity</p></div>
            
          </div>
          <div className="weather-details__info-wrapper">
<div className="weather-details__info">img <p className="weather-details__title">UV index</p></div>

          </div>
          <div className="weather-details__info-wrapper">
            <div className="weather-details__info">img <p className="weather-details__title">Pressure</p></div>
          </div>
        </div>

        <div className="weather-details__right">right</div>
      </div>
    </section>
  );
}

export default WeatherDetails;
