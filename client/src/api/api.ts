// client/src/api/index.js

const API_URL = 'http://localhost:5000'; // Your backend API URL

// Example function to fetch data from the backend API
export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/api/cities`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// You can define more API functions as needed
export const getWeather = async (city: any)=>{
  try {
    const response = await fetch(`${API_URL}/api/weather?city=${city}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};