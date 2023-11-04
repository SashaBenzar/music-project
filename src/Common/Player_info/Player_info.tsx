import { InfoType, Music } from '@/Types';
import styles from './Player_info.module.scss';
import Pic from 'Image/image.jpg';
import React from 'react';

export const Player_info: React.FC<InfoType> = ({
  open,
  tracks,
  index,
  setIndex,
  musicRef,
  duration,
  formatTime,
}) => {
  const [text, setText] = React.useState(false);
  const toggleChoose = (i: number) => {
    setIndex(i);
    musicRef.current.src = tracks[i].url;
  };

  return (
    <div className={styles.info__container} style={open ? { bottom: '0' } : { bottom: '-100%' }}>
      <div className={styles.info__preview}>
        <img src={tracks[index].artwork} alt="preview" />
      </div>
      <div className={styles.info__sidebar}>
        <div className={styles.info__menu}>
          <button className="info__button" onClick={() => setText(false)}>
            Up next
          </button>
          <button
            className="info__button"
            disabled={!tracks[index].lyric}
            onClick={() => setText(true)}>
            Lyrics
          </button>
        </div>
        <div className={styles.info__tracks}>
          {!text ? (
            tracks.map((track: Music, i: number) => (
              <div
                className={`${styles.info__music} ${i == index ? '__button' : ''}`}
                key={track.id}
                onClick={() => toggleChoose(i)}>
                <div className={styles.info__img}>
                  <img src={track.artwork} alt="image" />
                </div>
                <h3>{track.title}</h3>
                <h4>{formatTime(duration)}</h4>
              </div>
            ))
          ) : (
            <div style={{ whiteSpace: 'pre-line' }}>
              {tracks[index].lyric.split('\\n').join('\n')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
