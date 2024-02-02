import styles from "./App.module.css";
import{BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { WSiteDetails } from "./paginas/WSiteDetails";
import { HomePage } from "./paginas/HomePage";

export function App(){
    return (
        <Router>
            <header>
                <Link to="/">
                    <h1 className={styles.title}>Resultados del Scraping</h1>
                </Link>
                
            </header>
            <main>
                <Routes>
                    <Route exact path="/webSites/:webSiteId" element={<WSiteDetails />}></Route>
                    <Route path="/" element={<HomePage />}></Route>
                </Routes>
                {/* <div className={styles.subtitle}><strong>Redes sociales</strong></div>
                <WSitesGrid /> */}
            </main>
        </Router>
    );
}