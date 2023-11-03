import { DisplayType } from '@/Types';
import styles from './Display_track.module.scss';

import Dis from 'Image/SVG/Player/dislike.svg';
import Like from 'Image/SVG/Player/like.svg';

export const Display_track: React.FC<DisplayType> = ({ data, index }) => {
  return (
    <div className={styles.display__info}>
      <div className={styles.display__logo}>
        <img src={data ? data[index].artwork : ''} alt="logo" />
      </div>
      <div className={styles.display__title}>
        <h2>{data ? data[index].title : ''}</h2>
        <h3>{data ? data[index].author : ''}</h3>
      </div>
      <div className={styles.display__rate}>
        <img src={Like} alt="like" />
        <img src={Dis} alt="dislike" />
      </div>
    </div>
  );
};
