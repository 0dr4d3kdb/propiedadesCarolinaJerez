import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <img
          src="/logo.png"
          alt="CJM Inmobiliaria"
          title="CJM Inmobiliaria"
        />
      </div>

      <div className={styles.contacto}>
        <a href="#">
            <img className={styles.redes} src="/facebook.png" alt="Facebook" />
        </a>
        <a href="#">
            <img className={styles.redes} src="/whatsapp.png" alt="Whatsapp" />
        </a>
        <a href="#">
            <img className={styles.redes} src="/instagram.png" alt="Instagram" />
        </a>
      </div>
    </div>
  );
}

