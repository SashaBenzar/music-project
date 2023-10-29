import { Player_info } from '@/Common';
import styles from './Player.module.scss';
import Pic from 'Image/image.jpg';
import {
  Prev,
  Pause,
  Play,
  Next,
  Like,
  Dis,
  VOff,
  Loop,
  Rand,
  CaretOpen,
  CaretClose,
} from 'Image/SVG/Player';
import React from 'react';

export const Player: React.FC = () => {
  const [play, setPlay] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className={styles.player}>
        <div className={styles.player__bar}>
          <div className={styles.player__progress}></div>
        </div>
        <div className={styles.player__menu}>
          <img src={Prev} alt="dislike" />
          <img src={play ? Play : Pause} onClick={() => setPlay(!play)} alt="dislike" />
          <img src={Next} alt="dislike" />
        </div>
        <div className={styles.player__info}>
          <div className={styles.player__logo}>
            <img src={Pic} alt="logo" />
          </div>
          <div className={styles.player__title}>
            <h2>Music 1</h2>
            <h3>Author</h3>
          </div>
          <div className={styles.player__rate}>
            <img src={Like} alt="dislike" />
            <img src={Dis} alt="dislike" />
          </div>
        </div>
        <div className={styles.player__settings}>
          <img src={VOff} alt="dislike" />
          <img src={Loop} alt="dislike" />
          <img src={Rand} alt="dislike" />
          <img src={open ? CaretOpen : CaretClose} onClick={() => setOpen(!open)} alt="dislike" />
        </div>
      </div>
      <Player_info open={open} />
    </>
  );
};
