import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

export default function Cart({ open, setOpen }) {
  const { cart } = useContext(CartContext);

  return (
    <div className={`cartPanel ${open ? "open" : ""}`}>
      <div className="cartHeader">
        <h2>Корзина ({cart.length})</h2>
        <button onClick={() => setOpen(false)}>✕</button>
      </div>

      {cart.length === 0 ? (
        <p>Пусто</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} className="cartItem">
            <p>{item.name}</p>
            <span>{item.price} сом</span>
          </div>
        ))
      )}
    </div>
  );
}
