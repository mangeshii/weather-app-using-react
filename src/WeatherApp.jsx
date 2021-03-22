import { useState } from "react";
import styles from "./style";
// import "/home/mayur/Mangeshi/mangeshi/React/weather-app/weather-app/node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css'
import WeatherDescription from "./components/WeatherDescription.jsx"
import CityAndCountryData from "./components/CityAndCountryData";
import TemperatureData from "./components/TemperatureData";
import DateBuilder from "./components/DateBuilder.jsx"

const APP_ID = "045d48fc24a9c5bf068adf904cb95f7f";


function WeatherApp() {
    const [cityName, setCityName] = useState("");
    const [weatherData, setWeatherData] = useState({});

    const classes = styles();

    const search = async (event) => {
        if (event.key === "Enter") {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APP_ID}`
            );
            const data = await response.json();
            setWeatherData(data);
            setCityName("");
        }
    };



    const declareClassName = () => {
        if (typeof weatherData["main"]!=="undefined") {
            if (weatherData.weather[0].description === "sunny") {
                return (classes.sunny)
            } else if(weatherData.weather[0].description === "haze"){
                return (classes.haze)
            }else if(weatherData.weather[0].description === "mist"){
                return (classes.mist)
            }else if(weatherData.weather[0].description === "smoke"){
                return (classes.smoke)
            }else if(weatherData.weather[0].description === "dust"){
                return (classes.dust)
            }else if(weatherData.weather[0].description === "broken clouds"){
                return (classes.scattered_clouds)
            }else if(weatherData.weather[0].description === "overcast clouds"){
                return (classes.overcast_clouds)
            }else if(weatherData.weather[0].description === "clear sky"){
                return (classes.clear_sky)
            }else if(weatherData.weather[0].description === "scattered clouds"){
                return (classes.scattered_clouds)
            }else if(weatherData.weather[0].description === "few clouds"){
                return (classes.few_clouds)
            }
            else{
                return (classes.snow)
            }
        } else {

            return (classes.snow)
        }

    };

    const handleCityNameChange = (event) => {
        setCityName(event.target.value);
    };



    return (
        <>

                <div className={declareClassName()}>
                    <div className={classes.textField} >
                        <input className={classes.inputField}
                            value={cityName}
                            onChange={handleCityNameChange}
                            type='text'
                            onKeyPress={search}
                        ></input>
                    </div>

                    {(typeof weatherData["main"] != "undefined") ? (
                        <div className={classes.weatherinfo}>
                            <div className={classes.innerdiv}>
                                <div className={classes.cityandtime}>
                                    <h1 className={classes.city}>
                                        <CityAndCountryData weatherData={weatherData}/>
                                    </h1>
                                    <h6 className={classes.time}><DateBuilder/> </h6>
                                </div>
                                <div className={classes.tempBox}>
                                    <h1 className={classes.temps}>
                                        <TemperatureData  weatherData={weatherData}/>
                                    </h1>
                                </div>

                                <div className={classes.description}>
                                <WeatherDescription weatherData={weatherData}/>
                                </div>

                            </div>
                        </div>
                    ):(<p style={{color:'white',textAlign:'center'}}>Not Found</p>)}
                </div>


        </>
    );
}

export default WeatherApp;
