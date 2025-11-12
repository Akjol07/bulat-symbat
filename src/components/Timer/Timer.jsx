import { useEffect, useState } from "react";
import styles from "./Timer.module.scss";
import { motion as Motion } from "framer-motion";

const targetDate = new Date("2025-12-12T17:00:00");

const getTimeRemaining = (end) => {
  const total = end.getTime() - new Date().getTime();

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
};

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeRemaining(targetDate);
      if (remaining.total <= 0) {
        clearInterval(interval);
      }
      setTimeLeft(remaining);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (n) => String(n).padStart(2, "0");

  const timerFields = [
    {
      format: timeLeft.days,
      label: "күн",
    },
    {
      format: timeLeft.hours,
      label: "саат",
    },
    {
      format: timeLeft.minutes,
      label: "мүнөт",
    },
    {
      format: timeLeft.seconds,
      label: "секунд",
    },
  ];

  return (
    <div className={styles.container}>
      <Motion.p
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className={styles.label}
      >
        Үйлөнүү үлпөт тоюна чейин калды:
      </Motion.p>
      <div className={styles.timer}>
        {timerFields.map((i, ind) => (
          <Motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            key={ind}
          >
            <span className={styles.num}>{format(i.format)}</span>
            <span className={styles.label}>{i.label}</span>
          </Motion.div>
        ))}
      </div>
    </div>
  );
};
