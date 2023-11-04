import React from 'react';
import styles from './Settings_bar.module.scss';

import Rand from 'Image/SVG/Player/random.svg';
import VOff from 'Image/SVG/Player/volumeOff.svg';
import VOn from 'Image/SVG/Player/volumeOn.svg';
import CaretClose from 'Image/SVG/Player/caret_close.svg';
import CaretOpen from 'Image/SVG/Player/caret_open.svg';
import LoopOn from 'Image/SVG/Player/loop.svg';
import LoopOff from 'Image/SVG/Player/loop_off.svg';
import { SettingsType } from '@/Types';

export const Settings_bar: React.FC<SettingsType> = ({
  musicRef,
  open,
  setOpen,
  mute,
  setMute,
  isLoop,
  setLoop,
  tracks,
  setTracks,
}) => {
  const [volume, setVolume] = React.useState(10);

  React.useEffect(() => {
    musicRef.current.volume = volume / 100;
  }, [volume, isLoop]);

  const RandomTracks = () => {
    setTracks(
      (prev) =>
        prev &&
        prev
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value),
    );
  };

  return (
    <div className={styles.settings}>
      <img src={volume == 0 || mute ? VOff : VOn} onClick={() => setMute(!mute)} alt="volume" />
      <input
        type="range"
        min={0}
        max={100}
        value={volume}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVolume(Number(e.target.value))}
      />
      <img src={isLoop ? LoopOn : LoopOff} alt="loop" onClick={() => setLoop(!isLoop)} />
      <img src={Rand} alt="random" onClick={RandomTracks} />
      <img src={open ? CaretOpen : CaretClose} onClick={() => setOpen(!open)} alt="open" />
    </div>
  );
};
