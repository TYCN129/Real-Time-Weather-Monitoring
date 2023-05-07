import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './API';
import './App.css';
import { createContext, useState } from 'react';

export const AppContext = createContext();

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const onSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    await fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((response) => { setCurrentWeather({ city: searchData.label, ...response }) })
      .catch((err) => console.log(err));

    await fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((response) => { setForecast({ city: searchData.label, ...response }) })
      .catch((err) => console.log(err));
  }

  return (
    <AppContext.Provider value={{onSearchChange}} >
      <div className="container">
        <Search />
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
