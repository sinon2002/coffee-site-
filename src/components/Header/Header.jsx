import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Coffee</div>

      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">Our Story</a>
        <a href="#">Contact</a>
      </nav>

      <button className={styles.button}>Sign In</button>
    </header>
  );
}