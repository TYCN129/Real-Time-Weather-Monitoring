import CurrentWeather from "../current-weather/current-weather";
import './city-grid.css';

const CityGrid = (props) => {
    return (
        <div className="city-grid">
            {props.data.map((item, index) => {
                return (
                    <CurrentWeather data={props.data[index]} />
                )
            })}
        </div>
    )
}

export default CityGrid;