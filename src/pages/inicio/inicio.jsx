import { ConceptoCard } from "../../components/concepto-card";
import styles from "./inicio.module.css";

const conceptos = [
  {
    titulo: "React",
    descripcion: "Biblioteca de JavaScript orientada a la construcción de interfaces dinámicas mediante componentes reutilizables.",
    imagen: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
  },
  {
    titulo: "Componentes reutilizables",
    descripcion: "Permiten dividir la interfaz en piezas independientes que pueden usarse en varias páginas de la aplicación.",
    imagen: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
  },
  {
    titulo: "CSS Modules",
    descripcion: "Ayudan a encapsular estilos por componente, evitando conflictos entre clases CSS de distintas partes del proyecto.",
    imagen: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
];

export const InicioPage = () => {
  return (
    <section>
      <div className={styles.hero}>
        <h1>Desarrollo de componentes reutilizables usando React</h1>
        <p>Aplicación web creada con React, Vite, React Router, PropTypes, CSS Modules y consumo de API REST.</p>
      </div>
      <div className={styles.grid}>
        {conceptos.map((concepto) => (
          <ConceptoCard key={concepto.titulo} {...concepto} />
        ))}
      </div>
    </section>
  );
};
