import { URL_WEATHER_APP_ID } from '../constants/url.const';

export async function fetchWeatherData() {
  const url = URL_WEATHER_APP_ID;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '911d465666msh8fd9632616d3671p1fa9c1jsn2788f2d26872',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}
