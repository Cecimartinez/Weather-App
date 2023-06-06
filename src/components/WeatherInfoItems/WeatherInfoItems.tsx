import { WeatherData } from '@/interfaces/WeatherData';

export interface WeatherInfoItem {
  label: string;
  value: string;
}

export function getWeatherInfoItems(location: WeatherData['location'], current: WeatherData['current']): WeatherInfoItem[] {
  const weatherInfoItems: WeatherInfoItem[] = [
    { label: 'Location', value: `${location.name}, ${location.country}` },
    { label: 'Temperature', value: `${current.temp_c}°C` },
    { label: 'Local Time', value: `${location.localtime}` },
    { label: 'Condition', value: `${current.condition.text}` },
  ];

  return weatherInfoItems;
}
