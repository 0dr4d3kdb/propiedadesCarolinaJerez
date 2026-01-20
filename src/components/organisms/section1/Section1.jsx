import React from 'react'
import styles from './Section1.module.css'

export default function Section1() {
  return (
    <section className={styles.seccion1}>
        <h2>Aquí puedes encontrar</h2>
        <div className={styles.servicios}>
          <div className={styles.serv}>
            <img src="/casas.png" alt="Casa" />
            <h2>Casas</h2>
          </div>
          <div className={styles.serv}>
            <img src="/departamento.png" alt="Departamento" />
            <h2>Departamentos</h2>
          </div>
          <div className={styles.serv}>
            <img src="/parcela.png" alt="Parcela" />
            <h2>Parcelas</h2>
          </div>
          <div className={styles.serv}>
            <img src="/planificacion.png" alt="Administración" />
            <h2>Administración</h2>
          </div>
        </div>
    </section>
  )
}
