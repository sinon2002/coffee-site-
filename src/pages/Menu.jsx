import React from "react";
import "./Menu.css";

import coffee1 from "../assets/coffee1.png";
import coffee2 from "../assets/coffee2.png";
import coffee3 from "../assets/coffee3.png";

function Menu() {
  return (
    <div className="menu">
      <h1>Наше меню ☕</h1>

      <div className="menu-list">
        <div className="menu-item">
          <img src={coffee1} alt="coffee" />
          <h3>Капучино</h3>
          <p>150 сом</p>
          <button>Заказать</button>
        </div>

        <div className="menu-item">
          <img src={coffee2} alt="coffee" />
          <h3>Латте</h3>
          <p>170 сом</p>
          <button>Заказать</button>
        </div>

        <div className="menu-item">
          <img src={coffee3} alt="coffee" />
          <h3>Эспрессо</h3>
          <p>120 сом</p>
          <button>Заказать</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
