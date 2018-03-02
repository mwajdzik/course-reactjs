import axios from "axios";

const API_KEY = '7d50680060644b2bb8bcad98cba15406';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},pl`;
    const request = axios.get(url);

    // we use redux-promise middleware which will check if there is any promise in the returned object
    // if so, it will wait until the promise is resolved and then proceed to a reduce
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
