import styles from "./Ouners.module.scss";
import emblema from "../../assets/images/svg/emblema.svg";
import { motion as Motion } from "framer-motion";

export function Ouners() {
  return (
    <div className={styles.wrapper}>
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
        Терен урматтоо менен той ээлери:{" "}
      </Motion.p>
      <Motion.h2
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className={styles.names}
      >
        Чубак & Дамира
      </Motion.h2>

      <Motion.img
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        src={emblema}
        alt="emblema"
        className={styles.emblema}
      />
    </div>
  );
}
