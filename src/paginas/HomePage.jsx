import Search from "../componentes/Search";
import { WSitesGrid } from "../componentes/WSitesGrid";

export function HomePage(){
    return (
        <div>
            <Search />
            <WSitesGrid />
        </div>
    );
}