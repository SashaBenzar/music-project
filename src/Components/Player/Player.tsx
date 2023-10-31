import React from 'react';
import { Player_info } from '@/Common';
import { useGetMusicQuery } from 'Redux/Slice/musicSlice';
import styles from './Player.module.scss';

import Dis from 'Image/SVG/Player/dislike.svg';
import Like from 'Image/SVG/Player/like.svg';
import Loop from 'Image/SVG/Player/loop.svg';
import Next from 'Image/SVG/Player/next.svg';
import Pause from 'Image/SVG/Player/pause.svg';
import Play from 'Image/SVG/Player/play.svg';
import Prev from 'Image/SVG/Player/prev.svg';
import Rand from 'Image/SVG/Player/random.svg';
import VOff from 'Image/SVG/Player/volumeOff.svg';
import VOn from 'Image/SVG/Player/volumeOn.svg';
import CaretClose from 'Image/SVG/Player/caret_close.svg';
import CaretOpen from 'Image/SVG/Player/caret_open.svg';

export const Player: React.FC = () => {
  const { data, isFetching, error } = useGetMusicQuery('');

  const [index, setIndex] = React.useState(0);
  const [isPlay, setIsPlay] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [mute, setMute] = React.useState(false);
  const [loop, setLoop] = React.useState(false);
  const [volume, setVolume] = React.useState(10);
  const [duration, setDuration] = React.useState(0);
  const [elapsed, setElapsed] = React.useState(0);

  const musicRef = React.useRef<HTMLMediaElement>(null!);
  const clickRef = React.useRef<HTMLDivElement>(null!);

  React.useEffect(() => {
    const audio = musicRef.current;
    audio.volume = volume / 100;
    if (isPlay) {
      setInterval(() => {
        if (audio.duration != audio.currentTime) {
          setDuration(audio.duration);
          setElapsed(audio.currentTime);
        } else {
          toggleNext();
        }
      }, 1000);
    }
  }, [volume, isPlay, loop]);

  function formatTime(_time: number) {
    if (_time && !isNaN(_time)) {
      const time = Math.floor(_time);
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);

      return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return '00:00';
  }

  const togglePlay = () => {
    if (!isPlay) {
      musicRef.current?.play();
    } else {
      musicRef.current?.pause();
    }
    setIsPlay(!isPlay);
  };

  const toggleNext = () => {
    if (data) {
      if (index >= data.length - 1) {
        setIndex(0);
        musicRef.current.src = data[0].url;
        setTimeout(function () {
          musicRef.current.play();
        }, 150);
      } else {
        setIndex((prev) => prev + 1);
        musicRef.current.src = data[index + 1].url;
        setTimeout(function () {
          musicRef.current.play();
        }, 150);
      }
      setIsPlay(true);
    }
  };

  const togglePrev = () => {
    if (data) {
      if (index <= 0) {
        setIndex(data.length - 1);
        musicRef.current.src = data[data.length - 1].url;
        setTimeout(function () {
          musicRef.current.play();
        }, 150);
      } else {
        setIndex((prev) => prev - 1);
        musicRef.current.src = data[index - 1].url;
        setTimeout(function () {
          musicRef.current.play();
        }, 150);
      }
      setIsPlay(true);
    }
  };

  const checkWidth = (e: React.MouseEvent<HTMLDivElement>) => {
    const width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    musicRef.current.currentTime = (divprogress / 100) * duration;
  };

  return (
    <>
      <div className={styles.player}>
        {error ? (
          <></>
        ) : isFetching ? (
          <></>
        ) : data ? (
          <>
            <audio src={data[index].url} ref={musicRef} muted={mute} />
          </>
        ) : null}
        <div className={styles.player__bar} onClick={checkWidth} ref={clickRef}>
          <div
            className={styles.player__progress}
            style={{ width: `${(elapsed * 100) / duration}%` }}></div>
        </div>
        <div className={styles.player__menu}>
          <img src={Prev} alt="prev" onClick={() => togglePrev()} />
          <img src={isPlay ? Pause : Play} onClick={() => togglePlay()} alt="pause" />
          <img src={Next} alt="next" onClick={() => toggleNext()} />
          <div className={styles.player__time}>
            <h3>{formatTime(elapsed)}</h3>
            <h3>/</h3>
            <h3>{formatTime(duration)}</h3>
          </div>
        </div>
        <div className={styles.player__info}>
          <div className={styles.player__logo}>
            <img src={data ? data[index].artwork : ''} alt="logo" />
          </div>
          <div className={styles.player__title}>
            <h2>{data ? data[index].title : ''}</h2>
            <h3>{data ? data[index].author : ''}</h3>
          </div>
          <div className={styles.player__rate}>
            <img src={Like} alt="like" />
            <img src={Dis} alt="dislike" />
          </div>
        </div>
        <div className={styles.player__settings}>
          <img src={volume == 0 || mute ? VOff : VOn} onClick={() => setMute(!mute)} alt="volume" />
          <img src={Loop} alt="loop" onClick={() => setLoop(!loop)} />
          <img src={Rand} alt="random" />
          <img src={open ? CaretOpen : CaretClose} onClick={() => setOpen(!open)} alt="open" />
        </div>
      </div>
      <Player_info open={open} />
    </>
  );
};
