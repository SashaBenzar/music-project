import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import { Title } from 'Common/index';
import Burger from 'Image/SVG/Menu/burger.svg';
import Home from 'Image/SVG/Menu/home.svg';
import Profile from 'Image/SVG/Menu/profile.svg';
import Search from 'Image/SVG/Menu/search.svg';

export const Menu: React.FC = () => {
  return (
    <div className={styles.header__container}>
      <Title image={Burger}>Music</Title>
      <nav className={styles.header__menu}>
        <Link className={styles.header__button} to="/">
          <img src={Home} alt="Home" />
          Home
        </Link>
        <Link className={styles.header__button} to="/search">
          <img src={Search} alt="Search" />
          Search
        </Link>
        <Link className={styles.header__button} to="/profile">
          <img src={Profile} alt="Profile" />
          Profile
        </Link>
      </nav>
    </div>
  );
};
