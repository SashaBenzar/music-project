import styles from './Playlist.module.scss';
import { Music_list } from 'Common/index';
import Pic from 'Image/image.jpg';
import Play from 'Image/SVG/Playlist/play.svg';
import Mix from 'Image/SVG/Playlist/mix.svg';

export const Playlist = () => {
  return (
    <div className={styles.playlist__container}>
      <div className={styles.playlist__menu}>
        <div className={styles.playlist__image}>
          <img src={Pic} alt="music" />
        </div>
        <div className={styles.playlist__info}>
          <h1>Playlist 1</h1>
          <h6>0 tracks</h6>
          <h6>0 hours</h6>
          <div className={styles.playlist__play}>
            <img src={Play} alt="play" />
            <img src={Mix} alt="mix" />
          </div>
        </div>
      </div>
      <Music_list />
    </div>
  );
};
