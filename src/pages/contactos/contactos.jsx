import styles from "./contactos.module.css";

export const ContactosPage = () => {
  return (
    <section className={styles.contactos}>
      <h1>Contactos</h1>
      <p>Esta sección permite verificar el funcionamiento de la navegación entre páginas usando React Router.</p>
      <div className={styles.card}>
        <h2>Información institucional</h2>
        <p><strong>Universidad:</strong> Universidad de las Fuerzas Armadas ESPE</p>
        <p><strong>Asignatura:</strong> Programación Integrativa de Componentes Web</p>
        <p><strong>Correo:</strong> soporte.academico@espe.edu.ec</p>
      </div>
    </section>
  );
};
