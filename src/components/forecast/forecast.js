import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css';

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Forecast = (props) => {
    const today = new Date().getDay();
    const forecastDays = weekDays.slice(today, weekDays.length).concat(weekDays.slice(0, today));

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {props.data.list.splice(0, 7).map((item, index) => {
                    return (
                        <AccordionItem key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="daily-item">
                                        <img alt='weather-description' className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                        <label className="day">{forecastDays[index]}</label>
                                        <label className="description">{item.weather[0].description}</label>
                                        <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="daily-details-grid">
                                    <div className="daily-details-grid-item">
                                        <label>Pressure:</label>
                                        <label>{item.main.pressure}</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Humidity:</label>
                                        <label>{item.main.humidity}</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Clouds:</label>
                                        <label>{item.clouds.all}%</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Wind speed:</label>
                                        <label>{item.wind.speed} m/s</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Sea level:</label>
                                        <label>{item.main.sea_level}m</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Feels like:</label>
                                        <label>{item.main.feels_like}°C</label>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </>
    )
}

export default Forecast;