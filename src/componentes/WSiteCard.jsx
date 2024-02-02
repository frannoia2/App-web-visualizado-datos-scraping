import { Link } from "react-router-dom";
import styles from "./WSiteCard.module.css";

export function WSiteCard({entrada}){
    return <li className={styles.wSiteCard}>
            <Link to={"/webSites/"+ entrada.id}>
                <div><strong>{entrada.url}</strong></div>
            </Link>
        </li>
}