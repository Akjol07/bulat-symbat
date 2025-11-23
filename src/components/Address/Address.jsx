import { Line } from "../../ui/Line";
import styles from "./Address.module.scss";
import { motion as Motion } from "framer-motion";

export function Address() {
  const onMapBtn = () => {
    const placeCoords = {
      lat: 42.87586,
      lng: 74.500521,
    };

    const mapCenter = {
      lat: 42.875671,
      lng: 74.500478,
      zoom: 16,
    };

    const url = `https://2gis.kg/bishkek/firm/70000001090743355/${placeCoords.lng},${placeCoords.lat}?m=${mapCenter.lng},${mapCenter.lat}/${mapCenter.zoom}`;
    window.open(url, "_blank");
  };

  return (
    <div className={styles.wrapper}>
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
        Дареги:
      </Motion.h2>
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
        Бишкек шаары, Фрунзе көчөсү 133
        <br />
        Ресторан “AYAR”
      </Motion.p>
      <Motion.p
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className={styles.time}
      >
        12.12.2025 15:00
      </Motion.p>
      <Motion.button
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        onClick={onMapBtn}
        className={styles.mapBtn}
      >
        Картадан көрүү
      </Motion.button>
      <Line />
    </div>
  );
}
