import { ControlsType } from '@/Types';
import styles from './Controls.module.scss';

import Next from 'Image/SVG/Player/next.svg';
import Pause from 'Image/SVG/Player/pause.svg';
import Play from 'Image/SVG/Player/play.svg';
import Prev from 'Image/SVG/Player/prev.svg';
import React from 'react';

export const Controls: React.FC<ControlsType> = ({
  musicRef,
  duration,
  elapsed,
  setElapsed,
  index,
  setIndex,
  tracks,
  toggleNext,
  formatTime,
}) => {
  const [isPlay, setIsPlay] = React.useState(false);
  const playAnimationRef = React.useRef(0);

  const repeat = React.useCallback(() => {
    const currentTime = musicRef.current.currentTime;
    setElapsed(currentTime);

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [musicRef, duration, elapsed]);

  React.useEffect(() => {
    if (isPlay) {
      musicRef.current.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      musicRef.current.pause();
      cancelAnimationFrame(playAnimationRef.current);
    }
  }, [isPlay, musicRef, repeat]);

  const togglePrev = () => {
    if (index <= 0) {
      setIndex(tracks.length - 1);
      musicRef.current.src = tracks[tracks.length - 1].url;
    } else {
      setIndex((prev) => prev - 1);
      musicRef.current.src = tracks[index - 1].url;
    }
  };

  return (
    <>
      <div className={styles.controls__menu}>
        <img src={Prev} alt="prev" onClick={() => togglePrev()} />
        <img src={isPlay ? Pause : Play} onClick={() => setIsPlay((prev) => !prev)} alt="pause" />
        <img src={Next} alt="next" onClick={() => toggleNext()} />
        <div className={styles.controls__time}>
          <h3>{formatTime(elapsed)}</h3>
          <h3>/</h3>
          <h3>{formatTime(duration)}</h3>
        </div>
      </div>
    </>
  );
};
