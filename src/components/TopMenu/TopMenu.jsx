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
import fon from "../../assets/fon.png";
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
    title: "Капучино",

    leftTop: {
      title: "Высокое качество зерен",
      desc: "Только отборная арабика для насыщенного вкуса",
    },
    leftBottom: {
      title: "Атмосфера вдохновения",
      desc: "Создаём уют и настроение в каждой чашке",
    },

    rightTop: {
      title: "Индивидуальный подход",
      desc: "Учитываем предпочтения каждого гостя",
    },
    rightBottom: {
      title: "Профессиональная команда",
      desc: "Бариста с опытом и любовью к делу",
    },
  },

  {
    img: ascofee2,
    title: "Латте",

    leftTop: {
      title: "Нежный вкус",
      desc: "Лёгкий и мягкий кофейный баланс",
    },
    leftBottom: {
      title: "Японский чай",
      desc: "Ноты матча и натуральных ингредиентов",
    },

    rightTop: {
      title: "Мягкий аромат",
      desc: "Идеально подходит для утра",
    },
    rightBottom: {
      title: "Идеально утром",
      desc: "Лёгкость и энергия на весь день",
    },
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

<div className={styles.sliderBlock}>
  <div className={styles.center}>

    <img
      src={slides[index].img}
      className={`${styles.coffee} ${fade ? styles.show : styles.hide}`}
    />

    <h2>{slides[index].title}</h2>

    {/* ЛЕВО ВЕРХ */}
    <div className={`${styles.textBlock} ${styles.leftTop}`}>
      <h4>{slides[index].leftTop.title}</h4>
      <p>{slides[index].leftTop.desc}</p>
    </div>

    {/* ЛЕВО НИЗ */}
    <div className={`${styles.textBlock} ${styles.leftBottom}`}>
      <h4>{slides[index].leftBottom.title}</h4>
      <p>{slides[index].leftBottom.desc}</p>
    </div>

    {/* ПРАВО ВЕРХ */}
    <div className={`${styles.textBlock} ${styles.rightTop}`}>
      <h4>{slides[index].rightTop.title}</h4>
      <p>{slides[index].rightTop.desc}</p>
    </div>

    {/* ПРАВО НИЗ */}
    <div className={`${styles.textBlock} ${styles.rightBottom}`}>
      <h4>{slides[index].rightBottom.title}</h4>
      <p>{slides[index].rightBottom.desc}</p>
    </div>

    {/* КНОПКА */}
    <button className={styles.orderBtn}>
      Заказать →
    </button>

  </div>
</div>
    </section>
  );
}
