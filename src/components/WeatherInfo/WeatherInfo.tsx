import React from 'react';
import { WeatherData } from '@/interfaces/WeatherData';
import { getWeatherInfoItems, WeatherInfoItem } from '../WeatherInfoItems/WeatherInfoItems';

interface WeatherInfoProps {
  weatherData: WeatherData;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weatherData }) => {
  const { location, current } = weatherData;

  const weatherInfoItems: WeatherInfoItem[] = getWeatherInfoItems(location, current);

  return (
    <div className='flex flex-col'>
      {weatherInfoItems.map((item, index) => (
        <p key={index}>
          {item.label}: {item.value}
        </p>
      ))}
      <img src={`https:${current.condition.icon}`} alt="Weather Icon" />
    </div>
  );
}

export default WeatherInfo;
