import axios from 'axios';

const API_KEY = "905c9ad6ea1948efff1fe646a303f5ef";
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const country = "US";
    const URL = `${ROOT_URL}&q=${city},${country}`;

    const request = axios.get(URL);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
} 