import axios from 'axios';

const API_KEY = "905c9ad6ea1948efff1fe646a303f5ef";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const country = "us";
    const URL = `${ROOT_URL}&q=${city},${country}`;

    const request = axios.get(URL);
    //console.log("Request: ", request);
    //Here, request is a promise -- which is being sent to reducer
    return {
        type: FETCH_WEATHER,
        payload: request
    }
} 