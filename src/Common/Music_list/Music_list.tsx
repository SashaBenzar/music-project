import styles from './Music_list.module.scss';
import Pic from 'Image/image.jpg';

export const Music_list: React.FC = () => {
  return (
    <div className={styles.list}>
      <div className={styles.list__music}>
        <div className={styles.list__img}>
          <img src={Pic} alt="image" />
        </div>
        <h3>Music1</h3>
        <h4>Author</h4>
        <h4>Description</h4>
        <h4>4:14</h4>
      </div>
      <div className={styles.list__music}>
        <div className={styles.list__img}>
          <img src={Pic} alt="image" />
        </div>
        <h3>Music2</h3>
        <h4>Author</h4>
        <h4>Description</h4>
        <h4>4:14</h4>
      </div>
    </div>
  );
};
