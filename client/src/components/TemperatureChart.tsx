// TemperatureChart.tsx

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { WeatherHourly } from '@/types/weather'; // Assuming WeatherHourly is a type representing hourly weather data

interface TemperatureChartProps {
  hourlyData: WeatherHourly[]; // Assuming WeatherHourly is a type representing hourly weather data
}

const TemperatureChart: React.FC<TemperatureChartProps> = ({ hourlyData }) => {
  const chartContainer = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();

  useEffect(() => {
    if (chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: hourlyData.map((hour) => new Date(hour.dt * 1000).toLocaleTimeString('en-US')),
            datasets: [
              {
                label: 'Temperature (°C)',
                data: hourlyData.map((hour) => hour.temp),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Temperature (°C)',
                },
              },
              x: {
                title: {
                  display: true,
                  text: 'Time',
                },
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [hourlyData]);

  return <canvas ref={chartContainer} />;
};

export default TemperatureChart;
