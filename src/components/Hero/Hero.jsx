import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";
import coffee1 from "../../assets/coffe1.png";
import coffee2 from "../../assets/coffe2.png";
import coffee3 from "../../assets/coffe3.png";
import coffee4 from "../../assets/coffe4.png";
import coffee5 from "../../assets/coffe5.png";

const images = [coffee1, coffee2, coffee3, coffee4, coffee5];

export default function Hero() {
  const navigate = useNavigate(); // ✅ ВОТ СЮДА
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
<button className={styles.secondary} onClick={() => navigate("/menu")}>
  Попробовать меню
</button>
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
      style={{
        background: `radial-gradient(circle at center, ${color}, #1a1a1a)`
      }}
    />
  ))}
</div>

{/* 🥛 МОЛОЧНАЯ ВОЛНА */}
<div className={styles.milkWave}>
  <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path
      d="M0,224L60,213.3C120,203,240,181,360,170.7C480,160,600,160,720,176C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L0,320Z"
      fill="#FFF5EE"
    >
      <animate
        attributeName="d"
        dur="5s"
        repeatCount="indefinite"
        values="
        M0,224L60,213.3C120,203,240,181,360,170.7C480,160,600,160,720,176C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L0,320Z;

        M0,260L60,220C120,180,240,150,360,160C480,170,600,210,720,220C840,230,960,210,1080,190C1200,170,1320,180,1380,190L1440,200L1440,320L0,320Z;

        M0,224L60,213.3C120,203,240,181,360,170.7C480,160,600,160,720,176C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L0,320Z
        "
      />
    </path>
  </svg>
</div>
    </section>
  );
}
