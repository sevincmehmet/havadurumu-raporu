import CardsCss from "../style/Cards.module.css"

const Cards = () => {

    return(
        <>
            <div className={CardsCss.card}>
                <div className={CardsCss.header}>Wed</div>
                <div className={CardsCss.body}>
                    {/* <img src="" alt="" /> */}
                    images
                </div>
                <div className={CardsCss.footer}>
                    <span> 77.</span><span>68.</span>
                </div>
            </div>
        </>
    )
}
export default Cards;