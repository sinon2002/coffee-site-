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
       <div className={styles.milkWave}>
  <svg viewBox="0 0 1440 320">
    <path
      fill="#FFF5EE"
      d="M0,224L60,213.3C120,203,240,181,360,170.7C480,160,600,160,720,176C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L0,320Z"
    >
      <animate
        attributeName="d"
        dur="6s"
        repeatCount="indefinite"
        values="
        M0,224L60,213.3C120,203,240,181,360,170.7C480,160,600,160,720,176C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L0,320Z;
        
        M0,240L60,200C120,160,240,140,360,150C480,160,600,200,720,210C840,220,960,200,1080,180C1200,160,1320,160,1380,170L1440,180L1440,320L0,320Z;
        
        M0,224L60,213.3C120,203,240,181,360,170.7C480,160,600,160,720,176C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L0,320Z
        "
      />
    </path>
  </svg>
</div>

<div className={styles.leaves}></div>
    </section>
  );
}
