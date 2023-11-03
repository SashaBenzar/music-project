import React from 'react';
import { Controls, Display_track, Player_info, Progress_bar, Settings_bar } from '@/Common';

import { useGetMusicQuery } from 'Redux/Slice/musicSlice';
import styles from './Player.module.scss';

export const Player: React.FC = () => {
  const { data, isFetching, error } = useGetMusicQuery('');

  const [index, setIndex] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [elapsed, setElapsed] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [mute, setMute] = React.useState(false);
  const [isLoop, setLoop] = React.useState(false);

  const musicRef = React.useRef<HTMLMediaElement>(null!);

  function formatTime(_time: number) {
    if (_time && !isNaN(_time)) {
      const time = Math.floor(_time);
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);

      return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return '00:00';
  }

  const toggleNext = () => {
    if (data) {
      if (index >= data.length - 1) {
        setIndex(0);
        musicRef.current.src = data[0].url;
      } else {
        setIndex((prev) => prev + 1);
        musicRef.current.src = data[index + 1].url;
      }
    }
  };

  return error ? (
    <h1>Error</h1>
  ) : isFetching ? (
    <h1>Loading...</h1>
  ) : data ? (
    <>
      <div className={styles.player}>
        <audio
          src={data[index].url}
          ref={musicRef}
          muted={mute}
          loop={isLoop}
          onLoadedMetadata={() => setDuration(musicRef.current.duration)}
          onEnded={toggleNext}
        />
        <Progress_bar {...{ musicRef, duration, elapsed }} />
        <Controls
          {...{
            musicRef,
            duration,
            elapsed,
            setElapsed,
            index,
            setIndex,
            data,
            toggleNext,
            formatTime,
          }}
        />
        <Display_track {...{ data, index }} />
        <Settings_bar {...{ musicRef, open, setOpen, mute, setMute, isLoop, setLoop }} />
      </div>
      <Player_info {...{ open, data, index, setIndex, musicRef, duration, formatTime }} />
    </>
  ) : (
    <h1>Error data</h1>
  );
};
