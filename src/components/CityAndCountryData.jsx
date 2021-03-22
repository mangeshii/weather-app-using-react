const CityAndCountryData=(props)=>{
    return(
        `${props.weatherData.name},${props.weatherData.sys.country}`
    )
}

export default CityAndCountryData