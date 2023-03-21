import React, { useEffect, useState } from "react";
import { useAPI } from "../context/apiContext";
import Cards from "./Cards";

import CardsBodyCss from "../style/CardsBody.module.css";



const CardsBody = () => {
    const { wheather, loading } = useAPI();
    const [ data, setData ] = useState([]);

    useEffect(()=> {
        setData(wheather)
        console.log(data);
    }, [wheather])
    return (
        <>
            <div className={CardsBodyCss.body}>
                {!loading ? data.map((oItem, oIndex) => {
                    return (
                        <div key={oIndex} className={CardsBody.bodyItem}>
                            <Cards date={oItem.date} maxTemp={oItem.day.maxtemp_c} minTemp={oItem.day.mintemp_c} icon={oItem.day.condition.icon} />
                        </div>
                    );
                }):<><div style={{height:120}}>Loading...</div></>}
            </div>
        </>
    );
};
export default CardsBody;
