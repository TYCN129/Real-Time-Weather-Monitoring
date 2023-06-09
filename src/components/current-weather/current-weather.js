import './current-weather.css';

const CurrentWeather = (props) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{props.data.city}</p>
                    <p className="weather-description">{props.data.weather[0].description}</p>
                </div>
                <img alt="weather-description-image" className="weather-icon" src={`icons/${props.data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(props.data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like </span>
                        <span className="parameter-value">
                            {Math.round(props.data.main.feels_like)}°C
                        </span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind </span>
                        <span className="parameter-value">{Math.round(props.data.wind.speed)} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity </span>
                        <span className="parameter-value">{Math.round(props.data.main.humidity)}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure </span>
                        <span className="parameter-value">{Math.round(props.data.main.pressure)} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;