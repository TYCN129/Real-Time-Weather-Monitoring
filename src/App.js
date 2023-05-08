import Search from './components/search/search';
import { WEATHER_API_KEY, WEATHER_API_URL } from './API';
import './App.css';
import { createContext, useState } from 'react';
import CityGrid from './components/city-grid/city-grid';

export const AppContext = createContext();

function App() {
  const [currentWeatherList, setCurrentWeatherList] = useState([]);

  const removeCity = (cityName) => {
    const updatedWeatherList = currentWeatherList.filter((item) => (item.city !== cityName));
    setCurrentWeatherList(updatedWeatherList);
  }

  const onSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    await fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((response) => { setCurrentWeatherList([...currentWeatherList, { city: searchData.label, ...response }]) })
      .catch((err) => console.log(err));
  }

  return (
    <AppContext.Provider value={{onSearchChange, removeCity}} >
      <div className="container">
        <Search />
        {currentWeatherList && <CityGrid data={currentWeatherList} />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
