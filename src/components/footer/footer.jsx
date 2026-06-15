import styles from "./footer.module.css";

export const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>Universidad de las Fuerzas Armadas ESPE</p>
      <p>Programación Integrativa de Componentes Web © {anioActual}</p>
    </footer>
  );
};
