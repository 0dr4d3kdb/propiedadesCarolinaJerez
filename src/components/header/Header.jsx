import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>MyApp</div>

      <nav className={styles.nav}>
        <Link to="/" className={styles.links}>Inicio</Link>
        <Link to="/about" className={styles.links}>Sobre nosotros</Link>

        {/* DROPDOWN */}
        <div
          className={styles.dropdown}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button
            className={styles.dropdownbutton}
            aria-expanded={open}
          >
            Propiedades ▾
          </button>

          {open && (
            <ul className={styles.dropdownmenu}>
              <li>
                <Link to="/propiedades/venta">Venta</Link>
              </li>
              <li>
                <Link to="/propiedades/arriendo">Arriendo</Link>
              </li>
            </ul>
          )}
        </div>

        <Link to="/projects" className={styles.links}>Servicios</Link>
        <Link to="/contact" className={styles.links}>Contacto</Link>
      </nav>
    </header>
  );
}
