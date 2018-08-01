import axios from 'axios';

const API_KEY = 'b9c1c7de3fa0972c07aae4a548026c43';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},kr`;
  const request = axios.get(url);

  return {
    // redux-promise가 request의 Resolove or Error를 대신 처리해준다.
    // redux-promise가 middleware이다.
    type: 'FETCH_WEATHER',
    payload: request
  };
}