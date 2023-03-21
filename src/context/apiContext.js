import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

const APP_KEY = "d923ae6770a14f9494d95349232003 ";

export function APIContextProvider({ children }) {
    const [wheather, setWheather] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCity, setActiveCity] = useState('Adana')

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(
                `http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${activeCity}&days=7&aqi=no&alerts=no`
            );
            console.log(data);
            setWheather(data.forecast.forecastday);
            setLoading(false)
        }
        fetchData();
    }, [activeCity]);
    return (
        <APIContext.Provider
            value={{
                wheather,
                loading,
                activeCity,
                setActiveCity
            }}
        >
            {children}
        </APIContext.Provider>
    );
}

export function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}
