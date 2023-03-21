import React, { useEffect, useState } from "react";
import City from "../data/CityData";
import Headers from "../style/Header.module.css";
import { useAPI } from "../context/apiContext";

const Header = () => {
    const { activeCity, setActiveCity } = useAPI();


    useEffect(() => {
        setActiveCity(activeCity);
        console.log(activeCity);
    }, [activeCity]);

    function onSelect_change(e) {
        setActiveCity(e.target.value);
    }

    return (
        <div className={Headers.header}>
            <select
                id="citys"
                className={Headers.citys}
                onChange={(e) => {
                    onSelect_change(e);
                }}
            >
                {City.map((oItem, oIndex) => {
                    return (
                        <option key={oIndex} value={oItem.name}>
                            {oItem.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
export default React.memo(Header);



