import React from 'react'
import Publicacion from '../../organisms/publicacion/Publicacion'
import styles from "./Propiedades.module.css"

export default function Propiedades() {
  return (
    <div className={styles.pag}>
        <Publicacion
            id = {1}
            imagenes = {["/prop1.jpg", "/prop2.jpg","/prop3.jpg"]}
            direccion = "Pasaje La Turbina 630"
            comuna = "Melipilla"
            cantHabitaciones = {3}
            cantBanos = {2}
            superficieTerreno = {80}
            superficieConstruida = {60}
            descripcion = "Casa pulenta"
            tipo = "Casa"
            trato = "Arriendo"/>
    </div>
  )
}
