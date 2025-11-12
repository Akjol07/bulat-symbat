import styles from "./Calendar.module.scss";
import heart from "../../assets/images/svg/heart.svg";
import firstBg from "../../assets/images/jpg/first.jpg";
import secondBg from "../../assets/images/jpg/second.jpg";
import thirdBg from "../../assets/images/jpg/three.jpg";
import { Line } from "../../ui/Line";
import { motion as Motion } from "framer-motion";

const daysOfWeek = [
  { day: 8, label: "Пн" },
  { day: 9, label: "Вт" },
  { day: 10, label: "Ср" },
  { day: 11, label: "Чт" },
  { day: 12, label: "Пт" },
  { day: 13, label: "Сб" },
  { day: 14, label: "Вс" },
];

const dateGallery = [
  { url: firstBg, num: 12 },
  { url: secondBg, num: 12 },
  { url: thirdBg, num: 25 },
];

export function Calendar() {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <Motion.h2
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={styles.title}
        >
          Өткөрүлүүчү күнү
        </Motion.h2>
        <Motion.h3
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={styles.month}
        >
          Декабрь
        </Motion.h3>

        <Motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={styles.week}
        >
          {daysOfWeek.map((i, ind) => (
            <div className={styles.item} key={ind}>
              <span className={styles.label}>{i.label}</span>
              <div className={styles.day}>
                {i.day === 12 && (
                  <img src={heart} alt="heart" className={styles.heart} />
                )}
                {i.day}
              </div>
            </div>
          ))}
        </Motion.div>

        <div className={styles.gallery}>
          {dateGallery.map((item, ind) => (
            <Motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className={styles.galleryItem}
              key={ind}
              style={{ background: `url(${item.url})` }}
            >
              <span>{item.num}</span>
            </Motion.div>
          ))}
        </div>

        <Motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={styles.desk}
        >
          Аруу тилек, асыл максат жолубузда, Баш кошуп, турмуш куруу оюбузда.
          Өмүргө бирге аттандык кол кармашып, Келиңиздер ак никелүү тоюбузга!
        </Motion.p>
      </div>
      <Line />
    </div>
  );
}
