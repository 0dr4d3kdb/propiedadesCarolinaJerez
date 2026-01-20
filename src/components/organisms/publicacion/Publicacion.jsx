import React from 'react'
import styles from './Publicacion.module.css';

export default function Publicacion(props) {
  const {
    id,
    imagenes = [],
    direccion,
    comuna,
    cantHabitaciones,
    cantBanos,
    superficieTerreno,
    superficieConstruida,
    descripcion,
    tipo,
    trato
  } = props;

  return (
    <article className={styles.publicacion}>
      
      {/* Imagen principal */}
      <div className={styles.imagen}>
        <img
          src={imagenes[0] || '/placeholder.jpg'}
          alt={`Propiedad en ${comuna}`}
        />
        <span className={styles.badge}>
          {trato} · {tipo}
        </span>
      </div>

      {/* Contenido */}
      <div className={styles.contenido}>
        <h3>{direccion}</h3>
        <p className={styles.comuna}>{comuna}</p>

        <div className={styles.caracteristicas}>
          <span>🛏 {cantHabitaciones}</span>
          <span>🛁 {cantBanos}</span>
          <span>📐 {superficieConstruida} m²</span>
          {superficieTerreno && (
            <span>🌱 {superficieTerreno} m²</span>
          )}
        </div>

        <p className={styles.descripcion}>
          {descripcion}
        </p>

        <button className={styles.boton}>
          Ver publicación
        </button>
      </div>

    </article>
  );
}
