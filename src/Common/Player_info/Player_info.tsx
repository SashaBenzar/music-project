import { IsOpen } from '@/Types';
import styles from './Player_info.module.scss';
import Pic from 'Image/image.jpg';

export const Player_info: React.FC<IsOpen> = ({ open }) => {
  return (
    <div className={styles.info__container} style={open ? { bottom: '0' } : { bottom: '-100%' }}>
      <div className={styles.info__preview}>
        <img src={Pic} alt="preview" />
      </div>
      <div className={styles.info__sidebar}>
        <div className={styles.info__menu}>
          <div className="info__button">Up next</div>
          <div className="info__button">Lyrics</div>
        </div>
        <div className={styles.info__tracks}>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
          <div className={styles.info__music}>
            <div className={styles.info__img}>
              <img src={Pic} alt="image" />
            </div>
            <h3>Music1</h3>
            <h4>4:14</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
