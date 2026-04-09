import styles from "./TopMenu.module.css";
import { useState, useEffect } from "react";
import coffee1 from "../../assets/coffe1.png";
import desert1 from "../../assets/desert1.png";
import coffee3 from "../../assets/coffe3.png";
import desert2 from "../../assets/desert2.png";
import desert3 from "../../assets/desert3.png";
import zerno from "../../assets/zerno.png";
import zerno1 from "../../assets/zerno1.png";
import ascofee1 from "../../assets/ascofee1.jpg";
import ascofee2 from "../../assets/ascofee2.jpg";
import beans from "../../assets/coffee-beans.png";
export default function Menu() {
const items = [
  {
    title: "Матча Латте",
    desc: "Нежный и бодрящий вкус",
    price: "320 ₽",
    img: coffee1,
    likes: 56,
  },
  {
    title: "Лавандовый Раф",
    desc: "Цветочный аромат и мягкость",
    price: "290 ₽",
    img: desert1,
    likes: 23,
  },
  {
    title: "Карамельный Фраппе",
    desc: "Сладость и холодный карамель",
    price: "280 ₽",
    img: coffee3,
    likes: 31,
  },
  {
    title: "Чизкейк",
    desc: "Нежный сливочный десерт",
    price: "250 ₽",
    img: desert2,
    likes: 18,
  },
  {
    title: "Тирамису",
    desc: "Классический итальянский десерт",
    price: "270 ₽",
    img: desert3,
    likes: 22,
  },
];
const slides = [
  {
    img: ascofee1,
    title: "Капучина ",
     leftTop: "Высокое качество зерен",
    leftBottom: "Атмосфера вдохновения",
    rightTop: "Индивидуальный подход",
    rightBottom: "Профессиональная команда",
  },
  {
    img: ascofee2,
    title: " Латте",
    left: "Нежный вкус",
    bottomLeft: "Японский чай",
    right: "Мягкий аромат",
    bottomRight: "Идеально утром",
  },
];
const [index, setIndex] = useState(0);
const [fade, setFade] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {

    setFade(false); // сначала исчезает

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setFade(true); // потом появляется
    }, 500); // задержка

  }, 7000);

  return () => clearInterval(interval);
}, []);


  return (
    <section className={styles.menu}>
 <h2>Наше меню</h2>
      <p>Выберите любимый напиток или десерт</p>

      <div className={styles.cards}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            
            <div className={styles.likes}>❤️ {item.likes}</div>
            <div className={styles.decor}></div>

                   <img src={beans} className={styles.beans} />
            <img src={item.img} alt="" />

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <div className={styles.bottom}>
              <span>{item.price}</span>
              <button>Заказать</button>
            </div>

          </div>
          
        ))}
      </div>
<div className={styles.decor}></div>
<img src="/coffee-beans.png" className={styles.beans} />

      <div className={styles.banner}>
  
 <div className={styles.images}>
  <img src={zerno} className={styles.pack} />
  <img src={zerno1} className={styles.beans} />
</div>

  <div className={styles.bannerText}>

    <h3>Только натуральные продукты и зерна</h3>
    <p>
      Мы выбираем лучшие зерна со всего мира и готовим каждый напиток с любовью. 
      Никаких искусственных добавок — только чистый вкус и аромат настоящего кофе.
    </p>
  </div>

</div>

<div className={styles.promoBlock}>

  {/* ФОН */}
  <div className={styles.bg}></div>

  {/* КОНТЕНТ */}
  <div className={styles.content}>

    {/* КОФЕ */}
    <img
      src={slides[index].img}
      className={`${styles.coffee} ${fade ? styles.show : styles.hide}`}
    />

    <h2>{slides[index].title}</h2>

    {/* ТЕКСТЫ */}
    <div className={`${styles.textBlock} ${styles.leftTop}`}>
      <h4>{slides[index].leftTop}</h4>
      <p>{slides[index].leftDesc}</p>
    </div>

    <div className={`${styles.textBlock} ${styles.leftBottom}`}>
      <h4>{slides[index].leftBottom}</h4>
      <p>{slides[index].leftDesc2}</p>
    </div>

    <div className={`${styles.textBlock} ${styles.rightTop}`}>
      <h4>{slides[index].rightTop}</h4>
      <p>{slides[index].rightDesc}</p>
    </div>

    <div className={`${styles.textBlock} ${styles.rightBottom}`}>
      <h4>{slides[index].rightBottom}</h4>
      <p>{slides[index].rightDesc2}</p>
    </div>

  </div>
</div>

    </section>
  );
}
