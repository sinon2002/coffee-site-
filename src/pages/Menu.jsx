import React, { useContext } from "react";
import "./Menu.css";
import { CartContext } from "../context/CartContext";

import coffee1 from "../assets/coffe1.png";
import coffee2 from "../assets/coffe2.png";
import coffee3 from "../assets/coffe3.png";

function Menu() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="menu">
      <h1>Наше меню ☕</h1>

      <div className="menu-list">
        <div className="menu-item">
          <img src={coffee1} alt="coffee" />
          <h3>Капучино</h3>
          <p>150 сом</p>
          <button onClick={() => addToCart({ name: "Капучино", price: 150 })}>
            Заказать
          </button>
        </div>

        <div className="menu-item">
          <img src={coffee2} alt="coffee" />
          <h3>Латте</h3>
          <p>170 сом</p>
          <button onClick={() => addToCart({ name: "Латте", price: 170 })}>
            Заказать
          </button>
        </div>

        <div className="menu-item">
          <img src={coffee3} alt="coffee" />
          <h3>Эспрессо</h3>
          <p>120 сом</p>
          <button onClick={() => addToCart({ name: "Эспрессо", price: 120 })}>
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
