import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>Laboratorio React</Link>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.activo : undefined}>Inicio</NavLink>
        <NavLink to="/nosotros" className={({ isActive }) => isActive ? styles.activo : undefined}>Nosotros</NavLink>
        <NavLink to="/contactos" className={({ isActive }) => isActive ? styles.activo : undefined}>Contactos</NavLink>
        <NavLink to="/personajes" className={({ isActive }) => isActive ? styles.activo : undefined}>Personajes</NavLink>
      </nav>
    </header>
  );
};
