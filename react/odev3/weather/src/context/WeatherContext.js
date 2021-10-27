import { createContext, useState, useContext } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(null);

    const values = { weather, setWeather };

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext);