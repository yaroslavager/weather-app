import { useWeatherStore } from "../../features/search/modal/store"
import "./weatherForecast.scss"
function WeatherForecast(){
    const data=useWeatherStore(state=>state.data)
  if (!data || !data.forecast)return null  
const forecast=data.forecast.forecastday[0].hour

const filtredTime= forecast.filter((_, index)=>  index %3===0)
console.log(filtredTime)
    return(
        <section className="weather-forecast__wrapper">
            <h3>Forecast</h3>
            <div  className="weather-forecast__time-wrapper">
{filtredTime.map(time => (
<div className="weather-forecast__info"><p >{time.time.split(" ")[1]}</p>
<img src={time.condition.icon} />
<p className="weather-forecast__info-deg">{Math.round(time.temp_c)}&deg;C</p>
</div>
))}
            </div>
        </section>
    )
}
export default WeatherForecast