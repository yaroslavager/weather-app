const API_URL= import.meta.env.VITE_API_URL
const API_KEY=import.meta.env.VITE_API_KEY

export async function GetWeather(city:string) {
try{
    const forecast_url= `${API_URL}/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
console.log(forecast_url)
 const res= await fetch(forecast_url)
 if (!res.ok){
    throw new Error(`City not found`)
 }
  const data=  await res.json()

return data
}
catch(error){
throw new Error(error)

}
} 