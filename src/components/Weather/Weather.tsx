import { useEffect, useState } from 'react';
import { WeatherData } from '@/interfaces/WeatherData';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import { fetchWeatherData } from '../../servicies/apiRequest';

function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchWeatherData();
      setWeatherData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </div>
  );
}
export default Weather;
