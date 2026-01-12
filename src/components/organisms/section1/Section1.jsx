import React from 'react'
import styles from './Section1.module.css'

export default function Section1() {
  return (
    <section className={styles.seccion1}>
        <h2>¿Qué estás buscando?</h2>
        <div className={styles.botones}>
            <button>Botón1</button>
            <button>Botón1</button>
            <button>Botón1</button>
            <button>Botón1</button>
            <button>Botón1</button>
        </div>
    </section>
  )
}
