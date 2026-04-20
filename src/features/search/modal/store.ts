import {create} from 'zustand'
import { GetWeather } from "../../../shared/api/weather"




export const useWeatherStore=create((set)=>({
data: null,
error: null,

fetchWeather: async (city: string)=>{
try{
const weatherData=await GetWeather(city)
set({data: weatherData})
}
catch(error: any){
set({error: error.message})

}

}



}))