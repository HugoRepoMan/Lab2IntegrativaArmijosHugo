import { FaCode, FaDatabase, FaNetworkWired, FaShieldAlt } from "react-icons/fa";
import { MateriaItem } from "../../components/materia-item";
import styles from "./nosotros.module.css";

const materias = [
  {
    icono: <FaCode />,
    nombre: "Programación Integrativa de Componentes Web",
    descripcion: "Diseño de interfaces web modernas mediante componentes, rutas, servicios y consumo de APIs.",
  },
  {
    icono: <FaDatabase />,
    nombre: "Modelos Avanzados de Bases de Datos",
    descripcion: "Aplicación de técnicas de modelado, integración, consultas y gestión de información.",
  },
  {
    icono: <FaNetworkWired />,
    nombre: "Aplicaciones de Sistemas Operativos",
    descripcion: "Administración de servicios, virtualización, contenedores y automatización en sistemas modernos.",
  },
  {
    icono: <FaShieldAlt />,
    nombre: "Seguridad Informática",
    descripcion: "Estudio de controles, riesgos y mecanismos de protección aplicados a sistemas de información.",
  },
];

export const NosotrosPage = () => {
  return (
    <section>
      <h1>Nosotros</h1>
      <p className={styles.descripcion}>Esta página reutiliza el componente MateriaItem para mostrar asignaturas relacionadas con el semestre académico.</p>
      <div className={styles.lista}>
        {materias.map((materia) => (
          <MateriaItem key={materia.nombre} {...materia} />
        ))}
      </div>
    </section>
  );
};
