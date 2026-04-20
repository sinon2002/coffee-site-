import styles from "./Cards.module.css";
import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <div className={styles.cards}>
      
      <Link to="/about" className={styles.card}>
        <div className={styles.overlay}>
          <h2>О нас</h2>
          <p>Узнать больше</p>
        </div>
      </Link>

      <Link to="/menu" className={styles.card}>
        <div className={styles.overlay}>
          <h2>Меню</h2>
          <p>Узнать больше</p>
        </div>
      </Link>

    </div>
  );
}
