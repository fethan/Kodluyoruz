import Dropdown from './Dropdown';
import { useWeather } from '../context/WeatherContext';

function Weather() {
    const [weathers, setWeather] = useWeather();

    console.log(weathers);
    const handleClick = () => {
        setWeather({ name: 'London', temp: '20' });
    }

    return (
        <div className="weather">
            Weather

            <br />
            <br />
            <Dropdown />
            <button onClick={handleClick} >Click Weather</button>
            {


                weathers.map((weather, index) => (
                    <div key={index}>
                        <h3>{weather.name}</h3>
                        <p>{weather.temp}</p>
                    </div>
                ))

            }
        </div>
    )
}

export default Weather;