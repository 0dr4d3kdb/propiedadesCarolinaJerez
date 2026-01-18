import React, { useState, useEffect } from "react";
import styles from "./banner.module.css";

const carrusel = [
  "https://www.somos-tic.cl/wp-content/uploads/2021/01/Corretaje.jpg",
  "https://i0.wp.com/www.socovesa.cl/blog/web/wp-content/uploads/2024/10/tips-comprar-en-verde.jpeg?resize=1400%2C700&ssl=1",
  "https://aulavirtualacop.cl/wp-content/uploads/2024/10/handshake-real-estate-brokerage-agent-deliver-a-sa-2023-11-27-05-03-42-utc-scaled.jpg"
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const delay =  5000;

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, delay);

    return () => clearInterval(interval);

  }, [index])

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % carrusel.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + carrusel.length) % carrusel.length);
  };

  return (
    <div className={styles.background}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {carrusel.map((img, i) => (
          <div
            key={i}
            className={styles.slide}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <button className={`${styles.arrow} ${styles.left}`} onClick={prevImage}>
        ❮
      </button>

      <button className={`${styles.arrow} ${styles.right}`} onClick={nextImage}>
        ❯
      </button>
    </div>
  );
}
