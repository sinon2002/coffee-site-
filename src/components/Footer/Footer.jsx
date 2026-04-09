import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.top}>
        <h2>Coffee</h2>
        <p>Лучший кофе в городе ☕</p>
      </div>

      <div className={styles.middle}>
        <div>
          <h4>Контакты</h4>
          <p>+996 700 00 00 00</p>
          <p>coffee@mail.com</p>
        </div>

        <div>
          <h4>Адрес</h4>
          <p>г. Бишкек</p>
          <p>ул. Пример 123</p>
        </div>

        <div>
          <h4>Соцсети</h4>
          <p>Instagram</p>
          <p>Telegram</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Coffee. Все права защищены.</p>
      </div>

    </footer>
  );
}