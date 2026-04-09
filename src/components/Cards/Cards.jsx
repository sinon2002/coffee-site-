import styles from "./Cards.module.css";

export default function Cards() {
  return (
    <div className={styles.cards}>
      
      <a href="/about" className={styles.card}>
        <div className={styles.overlay}>
          <h2>О нас</h2>
          <p>Узнать больше</p>
        </div>
      </a>

      <a href="/menu" className={styles.card}>
        <div className={styles.overlay}>
          <h2>Меню</h2>
          <p>Узнать больше</p>
        </div>
      </a>

    </div>
  );
}