import { WSiteCard } from "./WSiteCard";
import entradas from "./entrada.json";
import styles from "./WSitesGrid.module.css";
import {useState } from "react";
import {FaSearch} from 'react-icons/fa'


export function WSitesGrid(){
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(entradas)

    const handleInputChange = (e) => {
        const {value} = e.target;
        setSearchText(value);
        filterData(value);
    };
    const filterData = (searchText) => {
        const filteredData = entradas.filter((item) => item.url.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredData(filteredData);
    };

    return (
        <><form className={styles.searchContainer}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type="text"
                    value={searchText}
                    onChange={handleInputChange} />
                <button className={styles.searchButton} type="submit">
                    <FaSearch size={25} />
                </button>
            </div>
        </form><div>
                <ul className={styles.wSitesGrid}>
                    {filteredData.map((entrada) => (
                        <WSiteCard key={entrada.id} entrada={entrada} />
                    ))}
                </ul>
            </div></>
        
        
    );
}