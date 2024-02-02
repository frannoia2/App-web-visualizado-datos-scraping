import { useEffect, useState } from "react";
import styles from "./WSiteDetails.module.css";
import { useParams } from "react-router-dom";
import wSitesData from "./entrada.json";
import Spinner from "../componentes/Spinner";

export function WSiteDetails() {
  // Trae el id de la pagina con useParams
  const { webSiteId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [wSiteData, setWSiteData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    // Busca el objeto con el id en el JSON
    const selectedWSite = wSitesData.find((site) => site.id === parseInt(webSiteId));
    // Actualiza el estado cuando encuentra coincidencia
    if (selectedWSite) {
      setIsLoading(false);
      setWSiteData(selectedWSite);
    }
  }, [webSiteId]);

  if(isLoading){
    return <Spinner />;
  }

  return (
    <div className={styles.detailsContainer}>
      {wSiteData ? (
        <div className={`${styles.col} ${styles.redesDetails}`}>
          {/* Muestra los datos de cada sitio web  */}
          <p className={styles.title}><strong>Web Site: </strong>{wSiteData.url}</p>
          <p><strong>Facebook: </strong><br />{wSiteData.facebook}</p>
          <p><strong>Twitter: </strong><br />{wSiteData.twitter}</p>
          <p><strong>Instagram: </strong><br />{wSiteData.instagram}</p>
          <p><strong>Youtube: </strong><br />{wSiteData.youtube}</p>
          <p><strong>Blog: </strong><br />{wSiteData.blog}</p>
          <p><strong>Tiktok: </strong><br />{wSiteData.tiktok}</p>
          <p><strong>Pinterest: </strong><br />{wSiteData.pinterest}</p>
          <p><strong>Spotify: </strong><br />{wSiteData.spotify}</p>
        </div>
      ) : (
        <p>No se encontró información para el ID proporcionado.</p>
      )}
    </div>
  );
}