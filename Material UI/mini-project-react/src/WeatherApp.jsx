import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 31.59,
        humidity: 46,
        temp: 30.72,
        tempMax: 38.72,
        tempMin: 30.72,
        weather: "broken clouds"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo }/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}