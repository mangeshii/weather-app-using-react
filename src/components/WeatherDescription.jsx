const WeatherDescription=(props)=>{
    return(
        props.weatherData["weather"][0]["description"]
    )

}

export default WeatherDescription