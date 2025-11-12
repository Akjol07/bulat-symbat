import { useState, useRef, useEffect } from "react";
import styles from "./Hero.module.scss";
import cn from "classnames";
import chevron from "../../assets/images/svg/chevron.svg";

export function Hero({ isLocked, setIsLocked }) {
  const [sliderPosition, setSliderPosition] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const startClientX = useRef(0);
  const initialSliderPosition = useRef(0);
  const isDragging = useRef(false);
  const currentSliderPositionRef = useRef(0);

  const audioRef = useRef(null);
  const hasPlayedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const getMaxTranslateX = () => {
    if (containerRef.current && sliderRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const sliderWidth = sliderRef.current.offsetWidth;
      const containerStyles = window.getComputedStyle(containerRef.current);
      const borderLeftWidth = parseFloat(containerStyles.borderLeftWidth);
      const borderRightWidth = parseFloat(containerStyles.borderRightWidth);
      return containerWidth - sliderWidth - borderLeftWidth - borderRightWidth;
    }
    return 0;
  };

  const handleMouseDown = (e) => {
    if (isLocked) return;
    isDragging.current = true;
    startClientX.current = e.clientX || e.touches[0].clientX;
    initialSliderPosition.current = sliderPosition;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || isLocked) return;
    const currentX = e.clientX || e.touches[0].clientX;
    const deltaX = currentX - startClientX.current;
    let newPosition = initialSliderPosition.current + deltaX;
    const maxTranslateX = getMaxTranslateX();
    newPosition = Math.max(0, Math.min(newPosition, maxTranslateX));
    setSliderPosition(newPosition);
    currentSliderPositionRef.current = newPosition;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
    const maxTranslateX = getMaxTranslateX();
    const lockThreshold = maxTranslateX * 0.7;
    if (currentSliderPositionRef.current >= lockThreshold) {
      if (!hasPlayedRef.current) {
        audioRef.current = new Audio("/audio/Dandelions.mp3");
        hasPlayedRef.current = true;
      }
      setIsPlaying(true);
      setSliderPosition(maxTranslateX);
      setIsLocked(true);
      setTimeout(() => {
        const foundElement = document.getElementById("presentTextWrapper");
        if (foundElement) {
          foundElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }
      }, 0);
    } else {
      setIsPlaying(false);
      setSliderPosition(0);
      setIsLocked(false);
    }
  };

  const handleTouchStart = (e) => handleMouseDown(e);
  const handleTouchMove = (e) => handleMouseMove(e);
  const handleTouchEnd = () => handleMouseUp();

  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Этот useEffect управляет воспроизведением аудио
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying && !document.hidden) {
        audioRef.current
          .play()
          .catch((err) =>
            console.error("Ошибка при воспроизведении аудио:", err)
          );
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Этот useEffect добавляет и убирает обработчик события видимости страницы
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (audioRef.current) {
        if (document.hidden) {
          audioRef.current.pause();
        } else if (isPlaying) {
          audioRef.current
            .play()
            .catch((err) =>
              console.error("Ошибка при воспроизведении аудио:", err)
            );
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  return (
    <div
      className={styles.wrapper}
      style={{ "--height": `100${!isLocked ? "dvh" : "vh"}` }}
    >
      <h1 className={styles.heading}>
        Булат <br />& <br />
        Сымбат
      </h1>

      <div className={cn(styles.bottom, { [styles.isHidden]: isLocked })}>
        <h2>WEDDING DAY</h2>
        <p>Чакырууну ачуу</p>
        <div ref={containerRef} className={styles.container}>
          <div className={cn(styles.circle, styles.startCircle)} />
          <div className={styles.track} />
          <div className={cn(styles.circle, styles.endCircle)} />
          <div
            ref={sliderRef}
            className={cn(styles.slider, { [styles.locked]: isLocked })}
            style={{ transform: `translateX(${sliderPosition}px)` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <img src={chevron} alt="chevron" />
          </div>
        </div>
      </div>
    </div>
  );
}
