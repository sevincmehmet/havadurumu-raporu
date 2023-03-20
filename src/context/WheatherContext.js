import { createContext, useState, useMemo, useEffect, useContext } from "react";

const wheatherContext = createContext();

const APP_KEY = "d923ae6770a14f9494d95349232003 ";


export const WheatherProvider = ({ children }) => {
    const [wheather, setWheather] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=London&days=7&aqi=no&alerts=no
        `)
        .then((res)=> res.json())
        .then(data => {setWheather(data); setLoading(false)})
        .catch((error) => console.log(error));
    }, [])

    const data = useMemo(() => {
        return !loading&&wheather;
    }, [wheather])
    const values = {
        data,
        loading
    };

    return (
        <wheatherContext.Provider value={values}>{children}</wheatherContext.Provider>
    )

};

export const useWheather = () => useContext(wheatherContext)