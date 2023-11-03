import React from 'react';
import styles from './Progress_bar.module.scss';
import { ProgressType } from 'Types/index';

export const Progress_bar: React.FC<ProgressType> = ({ musicRef, duration, elapsed }) => {
  const progressBarRef = React.useRef<HTMLInputElement>(null!);

  const handleProgressChange = () => {
    musicRef.current.currentTime = Number(progressBarRef.current.value);
  };

  return (
    <input
      className={styles.progress__bar}
      type="range"
      ref={progressBarRef}
      max={duration}
      value={elapsed}
      onChange={handleProgressChange}
    />
  );
};
