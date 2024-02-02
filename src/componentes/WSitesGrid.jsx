import { WSiteCard } from "./WSiteCard";
import entradas from "./entrada.json";
import styles from "./WSitesGrid.module.css";

export function WSitesGrid(){
       
    return (
        <ul className={styles.wSitesGrid}>
            {entradas.map((entrada) => (
                <WSiteCard key={entrada.id} entrada={entrada} />
            ))}
        </ul>
    );
}