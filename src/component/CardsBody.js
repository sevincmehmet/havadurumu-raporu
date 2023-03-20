import React, { useMemo } from "react";
import { useWheather } from "../context/WheatherContext";
import Cards from "./Cards"

import CardsBodyCss from "../style/CardsBody.module.css"


const CardsBody = () => {
    console.log("card body render");
    const { data, loading } = useWheather();

    return (
        <>
            {loading ? <>< div style={{ textAlign: "center" }
            }> Loading</div ></> :
                <><div className={CardsBodyCss.body}>
                    <div className="bodyItem">
                        <Cards />
                    </div>
                    <div className="bodyItem">
                        <Cards />
                    </div>
                    <div className="bodyItem">
                        <Cards />
                    </div>
                    <div className="bodyItem">
                        <Cards />
                    </div>
                    <div className="bodyItem">
                        <Cards />
                    </div>
                    <div className="bodyItem">
                        <Cards />
                    </div>
                    <div className="bodyItem">
                        <Cards />
                    </div>
                </div>
                
</>}</>
    )
}
export default React.memo(CardsBody);