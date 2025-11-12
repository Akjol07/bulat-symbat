import styles from "./Present.module.scss";
import emblema from "../../assets/images/svg/emblema.svg";
import { Line } from "../../ui/Line";
import { motion as Motion } from "framer-motion";
export function Present() {
  return (
    <div className={styles.container}>
      <div id="presentTextWrapper" className={styles.textWrapper}>
        <Motion.img
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={styles.emblema}
          src={emblema}
          alt="emblema"
        />
        <div className={styles.inner}>
          <Motion.p
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className={styles.firstText}
          >
            Урматтуу коноктор!
          </Motion.p>
          <Motion.p
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className={styles.secondText}
          >
            Сиздерди балдарыбыз
          </Motion.p>
          <Motion.p
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className={styles.thirdText}
          >
            Булат & Сымбат
          </Motion.p>
          <Motion.p
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className={styles.fourthText}
          >
            үйлөнүү үлпөт тоюна арналган салтанатка келип, кадырлуу коногубуз
            болуп, дасторкон үстүндө ак батаңызды берип кетүүгө чакырабыз!
          </Motion.p>
        </div>
      </div>
      <Line />
    </div>
  );
}
