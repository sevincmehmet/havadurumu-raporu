import Headers from "../style/Header.module.css"
const Header = () => {
    return (
        <div className={Headers.header}>
            <select id="citys" className={Headers.citys}>
                <option value="Trabzon">Trabzon</option>
            </select>
        </div>
    );
};
export default Header;
