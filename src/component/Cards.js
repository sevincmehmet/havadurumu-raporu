import { useAPI } from "../context/apiContext";
import CardsCss from "../style/Cards.module.css";

const Cards = ({ date, maxTemp, minTemp, icon }) => {
    const { loading } = useAPI();

    return (
        <>
            {loading ? (
                <div className={CardsCss.card}> 
                    Loading...
                </div>
            ) : (
                <div className={CardsCss.card}>
                    <div className={CardsCss.header}>{ date }</div>
                    <div className={CardsCss.body}>
                        <img src={icon} alt="" style={{width: "80%"}}/>
                    </div>
                    <div className={CardsCss.footer}>
                        <span> {maxTemp}</span> {` `}
                        <span>{minTemp}</span>
                    </div>
                </div>
            )}
        </>
    );
};
export default Cards;
