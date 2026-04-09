import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

import coffee1 from "../../assets/coffe1.png";
import coffee2 from "../../assets/coffe2.png";
import coffee3 from "../../assets/coffe3.png";
import coffee4 from "../../assets/coffe4.png";
import coffee5 from "../../assets/coffe5.png";

const images = [coffee1, coffee2, coffee3, coffee4, coffee5];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Открой вкус настоящего кофе ☕</h1>
          <p>Аромат, который заряжает энергией</p>
          <div className={styles.buttons}>
  <button className={styles.primary}>Заказать сейчас</button>
  <button className={styles.secondary}>Попробовать меню</button>
</div>
        </div>
      </div>

      {/* ☕ КОФЕ */}
      <div className={styles.slider}>
        {images.map((img, i) => {
          let className = styles.image;

          if (i === index) className += " " + styles.active;
          else if (i === (index - 1 + images.length) % images.length)
            className += " " + styles.previous;
          else if (i === (index + 1) % images.length)
            className += " " + styles.next;
          else className += " " + styles.inactive;

          return <img key={i} src={img} className={className} />;
        })}
      </div>

      {/* 🎨 ФОН */}
      <div className={styles.backgrounds}>
        {[
          "#7CB686",
          "#5F9CCF",
          "#ED746E",
          "#979797",
          "#292929",
        ].map((color, i) => (
          <div
            key={i}
            className={`${styles.bg} ${
              i === index ? styles.bgActive : ""
            }`}
            style={{ background: `radial-gradient(circle, ${color}, black)` }}
          />
        ))}
      </div>
       <div className={styles.waveWrapper}>
  <div className={styles.wave}></div>
</div>

<div className={styles.leaves}></div>
    </section>
  );
}