import React from "react";
import "./Menu.css"; // потом создадим стили

function Menu() {
  return (
    <div className="menu">
      <h1>Наше меню ☕</h1>

      <div className="menu-list">
        <div className="menu-item">
          <img src="/src/assets/coffee1.png" alt="coffee" />
          <h3>Капучино</h3>
          <p>150 сом</p>
          <button>Заказать</button>
        </div>

        <div className="menu-item">
          <img src="/src/assets/coffee2.png" alt="coffee" />
          <h3>Латте</h3>
          <p>170 сом</p>
          <button>Заказать</button>
        </div>

        <div className="menu-item">
          <img src="/src/assets/coffee3.png" alt="coffee" />
          <h3>Эспрессо</h3>
          <p>120 сом</p>
          <button>Заказать</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
