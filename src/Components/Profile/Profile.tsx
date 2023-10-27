import styles from './Profile.module.scss';
import { Title, List } from 'Common/index';
import Pic from 'Image/image.jpg';
import Fav from 'Image/SVG/Profile/favorite.svg';

export const Profile: React.FC = () => {
  return (
    <div className={styles.profile__container}>
      <div className={styles.profile__user}>
        <div className={styles.profile__avatar}>
          <img src={Pic} alt="avatar" />
        </div>
        <div className={styles.profile__info}>
          <h1>User name</h1>
          <h6>user@gmail.com</h6>
        </div>
      </div>
      <div className={styles.profile__favorite}>
        <Title image={Fav}>Favorite</Title>
        <List />
      </div>
    </div>
  );
};
