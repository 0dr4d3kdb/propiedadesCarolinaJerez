import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>MyApp</div>

      <nav className={styles.nav}>
        <Link to="/" className={styles.links}>Inicio</Link>
        <Link to="/sobre-nosotros" className={styles.links}>Sobre nosotros</Link>

        <div className={styles.dropdown} ref={dropdownRef}>
          <button
            className={styles.dropdownButton}
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            aria-haspopup="true"
          >
            Propiedades ▾
          </button>

          {open && (
            <ul className={styles.dropdownMenu}>
              <li>
                <Link to="/propiedades/venta" onClick={() => setOpen(false)}>
                  Venta
                </Link>
              </li>
              <li>
                <Link to="/propiedades/arriendo" onClick={() => setOpen(false)}>
                  Arriendo
                </Link>
              </li>
              <li>
                <Link to="/propiedades" onClick={() => setOpen(false)}>
                  Todas
                </Link>
              </li>
            </ul>
          )}
        </div>
        <Link to="/contact" className={styles.links}>Contacto</Link>
      </nav>
    </header>
  );
}
