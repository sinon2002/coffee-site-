import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const { cart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Coffee</div>

        <nav className={styles.nav}>
          <a href="#">Home</a>
          <Link to="/menu">Меню</Link>
          <a href="#">Our Story</a>
          <a href="#">Contact</a>
        </nav>

        <div className={styles.right}>
          <div
            className={styles.cartIcon}
            onClick={() => setOpen(true)}
          >
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className={styles.badge}>{cart.length}</span>
            )}
          </div>

          <button className={styles.button}>Sign In</button>
        </div>
      </header>

      <Cart open={open} setOpen={setOpen} />
    </>
  );
}
