import { create } from "zustand";
import { GetWeather } from "../api/weather";

interface WeatherDataType{
   data: null | Record<string, any>,
   error: string | null,
   fetchWeather: (city: string)=> Promise <void>
}

export const useWeatherStore= create <WeatherDataType >((set) => ({
  data: null,
  error: null,

  fetchWeather: async (city: string) => {
    try {
      const weatherData = await GetWeather(city);
      set({ data: weatherData });
    } catch (error: any) {
      set({ error: error.message });
    }
  },
}));
