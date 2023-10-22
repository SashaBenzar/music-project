import styles from './Library.module.scss';
import { Title } from 'Common/index';
import Lib from 'Image/SVG/Library/library.svg';
import Pic from 'Image/image.png';
import Add from 'Image/SVG/Library/add.svg';

export const Library = () => {
  return (
    <div className={styles.library}>
      <div className="library__container">
        <Title image={Lib}>Library</Title>
        <div className={styles.library__playlists}>
          <div className={styles.library__button}>
            <div className={styles.library__img}>
              <img src={Pic} />
            </div>
            <div className="library__text">
              <h2>Playlist 1</h2>
              <p>Description</p>
            </div>
          </div>
        </div>
        <div className={styles.library__add}>
          <button>
            <img src={Add} alt="add" />
          </button>
        </div>
      </div>
    </div>
  );
};
