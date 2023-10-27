import { Link } from 'react-router-dom';
import styles from './Library.module.scss';
import { Title } from 'Common/index';
import Lib from 'Image/SVG/Library/library.svg';
import Pic from 'Image/image.jpg';
import Add from 'Image/SVG/Library/add.svg';

export const Library: React.FC = () => {
  return (
    <div className={styles.library__container}>
      <Title image={Lib}>Library</Title>
      <Link to="/playlist" className={styles.library__playlists}>
        <div className={styles.library__button}>
          <div className={styles.library__img}>
            <img src={Pic} />
          </div>
          <div className="library__text">
            <h2>Playlist 1</h2>
            <p>Description</p>
          </div>
        </div>
      </Link>
      <div className={styles.library__add}>
        <button>
          <img src={Add} alt="add" />
        </button>
      </div>
    </div>
  );
};
