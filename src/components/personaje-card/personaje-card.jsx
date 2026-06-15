import PropTypes from "prop-types";
import styles from "./personaje-card.module.css";

export const PersonajeCard = ({ imagen, nombre, especie }) => {
  return (
    <article className={styles.personajeCard}>
      <img className={styles.imagen} src={imagen} alt={nombre} />
      <div className={styles.info}>
        <h3>{nombre}</h3>
        <span>{especie}</span>
      </div>
    </article>
  );
};

PersonajeCard.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  especie: PropTypes.string.isRequired,
};
