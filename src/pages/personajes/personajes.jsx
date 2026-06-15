import { useEffect, useState } from "react";
import { PersonajeCard } from "../../components/personaje-card";
import { obtenerPersonajes } from "../../services/rick-and-morty-service";
import styles from "./personajes.module.css";

export const PersonajesPage = () => {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarPersonajes = async () => {
      try {
        const datos = await obtenerPersonajes();
        setPersonajes(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    cargarPersonajes();
  }, []);

  return (
    <section>
      <h1>Personajes</h1>
      <p className={styles.descripcion}>Personajes obtenidos dinámicamente desde la API pública de Rick and Morty.</p>

      {cargando && <p>Cargando personajes...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.grid}>
        {personajes.map((personaje) => (
          <PersonajeCard
            key={personaje.id}
            imagen={personaje.image}
            nombre={personaje.name}
            especie={personaje.species}
          />
        ))}
      </div>
    </section>
  );
};
