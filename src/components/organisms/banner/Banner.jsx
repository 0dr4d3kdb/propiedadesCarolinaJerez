import React, { useState, useEffect } from "react";
import styles from "./banner.module.css";

const carrusel = [
  "/prop1.jpg",
  "/prop2.jpg",
  "/prop3.jpg",
  "/prop4.jpg"
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
