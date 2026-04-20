import styles from "./Header.module.css";
import { Link } from "react-router-dom";

<Link to="/menu">Меню</Link>

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Coffee</div>

      <nav className={styles.nav}>
        <a href="#">Home</a>
        <Link to="/menu">Menu</Link>
        <a href="#">Our Story</a>
        <a href="#">Contact</a>
      </nav>

      <button className={styles.button}>Sign In</button>
    </header>
  );
}
