import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Корзина 🛒</h2>

      {cart.length === 0 ? (
        <p>Пусто</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <span>{item.name}</span>
            <span>{item.price} сом</span>
          </div>
        ))
      )}
    </div>
  );
}
