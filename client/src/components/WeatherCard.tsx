// WeatherCard.tsx
import React from "react";
import { WeatherData } from "@/types/weather";

interface WeatherCardProps {
  weatherData: WeatherData;
}

const WeatherCard = ({ weatherData }: WeatherCardProps) => {
  return (
    <div className="h-full flex flex-col justify-center border rounded w-full space-y-40 text-center p-6">
      <div className="text-gray-600 text-base font-semibold">
        <h1 className="text-xl">{weatherData.time}Monday 5:00 PM</h1>
      </div>
      <div className="flex flex-col justify-center items-center space-y-40">
        <div className="flex justify-center items-center">
          <img src="cloudy-icon.png" className="w-80 mr-4" />
          <div className="text-6xl font-bold">
            <h1>{weatherData.main.temp}°F</h1>
          </div>
        </div>
        <div className="mt-2 text-xl font-semibold">
          <h1 className="text-4xl">{weatherData.weather[0].main}</h1>
        </div>
      </div>

      <div className="flex space-x-16 mt-2 justify-center items-center">
        <div className="flex flex-col space-y-4">
          <div className="text-gray-600 text-xl">
            <h1>Humidity</h1>
          </div>
          <div>
            <h1 className="text-xl">{weatherData.main.humidity}%</h1>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="text-gray-600 text-xl">
            <h1>Wind speed</h1>
          </div>
          <div>
            <h1 className="text-xl">{weatherData.wind.speed} km/h</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
