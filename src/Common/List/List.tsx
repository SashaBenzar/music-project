import styles from './List.module.scss';
import Pic from 'Image/image.jpg';

export const List: React.FC = () => {
  return (
    <div className={styles.list}>
      <div className={styles.list__music}>
        <div className={styles.list__img}>
          <img src={Pic} alt="image" />
        </div>
        <h3>Music1</h3>
      </div>
      <div className={styles.list__music}>
        <div className={styles.list__img}>
          <img src={Pic} alt="image" />
        </div>
        <h3>Music2</h3>
      </div>
    </div>
  );
};
