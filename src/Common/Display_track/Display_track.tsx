import { DisplayType } from '@/Types';
import styles from './Display_track.module.scss';

import Dis from 'Image/SVG/Player/dislike.svg';
import Like from 'Image/SVG/Player/like.svg';

export const Display_track: React.FC<DisplayType> = ({ tracks, index }) => {
  return (
    <div className={styles.display__info}>
      <div className={styles.display__logo}>
        <img src={tracks ? tracks[index].artwork : ''} alt="logo" />
      </div>
      <div className={styles.display__title}>
        <h2>{tracks ? tracks[index].title : ''}</h2>
        <h3>{tracks ? tracks[index].author : ''}</h3>
      </div>
      <div className={styles.display__rate}>
        <img src={Like} alt="like" />
        <img src={Dis} alt="dislike" />
      </div>
    </div>
  );
};
