"use client"
import React, { useState, useEffect } from 'react';
import { getWeather } from '@/api/api';
import { WeatherData } from '@/types/weather';
import { useSearchParams } from 'next/navigation';
import WeatherChart from '@/components/WeatherChart';

const Index = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const searchParams = useSearchParams();
  const city = searchParams.get('city');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getWeather(city as string);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeatherData(null);
      }
    };
    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-slate-50'>
      <WeatherChart data={weatherData}/>
    </div>
  );
};

export default Index;