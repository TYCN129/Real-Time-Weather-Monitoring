import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import './App.css';

function App() {
  return (
    <div className="container">
      <Search />
      <CurrentWeather />
    </div>
  );
}

export default App;
