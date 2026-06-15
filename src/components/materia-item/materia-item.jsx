import PropTypes from "prop-types";
import styles from "./materia-item.module.css";

export const MateriaItem = ({ icono, nombre, descripcion }) => {
  return (
    <article className={styles.materiaItem}>
      <div className={styles.icono}>{icono}</div>
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
      </div>
    </article>
  );
};

MateriaItem.propTypes = {
  icono: PropTypes.node.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};
