const TemperatureData=(props)=>{
    return(
        `${Math.floor(props.weatherData["main"]["temp"])}°c`
    )
}
export default TemperatureData