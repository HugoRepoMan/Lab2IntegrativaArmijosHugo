import PropTypes from "prop-types";
import styles from "./concepto-card.module.css";

export const ConceptoCard = ({ imagen, titulo, descripcion }) => {
  return (
    <article className={styles.conceptoCard}>
      <img className={styles.imagen} src={imagen} alt={titulo} />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </article>
  );
};

ConceptoCard.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};
