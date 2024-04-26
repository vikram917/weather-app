const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_URL = process.env.API_URL;
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

// Middleware
app.use(cors());
app.use(express.json());

// Route to cities fetch data from the API with pagination
app.get('/api/cities', async (req, res) => {
    try {
        const { page = 1 } = req.query;
        const pageSize = -1;
        const offset = (page - 1) * 20;

        const response = await axios.get(API_URL, {
            params: {
                limit: pageSize,
                offset: offset,
            },
        });
        const cities = response.data.results;
        res.json(cities);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'Error fetching data from the API' });
    }
});

// Route to fetch weather data
app.get('/api/weather', async (req, res) => {
    const { city } = req.query;

    try {
        if (!city) {
            return res.status(400).json({ error: 'City parameter is required' });
        }

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`;
        const response = await axios.get(apiUrl);

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
