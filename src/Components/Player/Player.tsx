import React from 'react';
import { Controls, Display_track, Player_info, Progress_bar, Settings_bar } from '@/Common';

import { useGetMusicQuery } from 'Redux/Slice/musicSlice';
import styles from './Player.module.scss';
import { Music } from '@/Types';

export const Player: React.FC = () => {
  const { data, isFetching, error } = useGetMusicQuery('');

  const [index, setIndex] = React.useState(0);
  const [tracks, setTracks] = React.useState<Music[]>();
  const [duration, setDuration] = React.useState(0);
  const [elapsed, setElapsed] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [mute, setMute] = React.useState(false);
  const [isLoop, setLoop] = React.useState(false);

  const musicRef = React.useRef<HTMLMediaElement>(null!);

  React.useEffect(() => {
    if (data) {
      setTracks(data);
    }
  }, [data]);

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
    if (tracks) {
      if (index >= tracks.length - 1) {
        setIndex(0);
        musicRef.current.src = tracks[0].url;
      } else {
        setIndex((prev) => prev + 1);
        musicRef.current.src = tracks[index + 1].url;
      }
    }
  };

  return error ? (
    <h1>Error</h1>
  ) : isFetching ? (
    <h1>Loading...</h1>
  ) : tracks ? (
    <>
      <div className={styles.player}>
        <audio
          src={tracks[index].url}
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
            tracks,
            toggleNext,
            formatTime,
          }}
        />
        <Display_track {...{ tracks, index }} />
        <Settings_bar
          {...{ musicRef, open, setOpen, mute, setMute, isLoop, setLoop, tracks, setTracks }}
        />
      </div>
      <Player_info {...{ open, tracks, index, setIndex, musicRef, duration, formatTime }} />
    </>
  ) : (
    <h1>Error data</h1>
  );
};
