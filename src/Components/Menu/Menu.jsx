import styles from './Menu.module.scss';
import { Title } from 'Common/index';
import Burger from 'Image/SVG/Menu/burger.svg';
import Home from 'Image/SVG/Menu/home.svg';
import Profile from 'Image/SVG/Menu/profile.svg';
import Search from 'Image/SVG/Menu/search.svg';

export const Menu = () => {
  return (
    <header className={styles.header}>
      <div className={'header__container'}>
        <Title image={Burger}>Music</Title>
        <nav className={styles.menu}>
          <ul className={styles.header__list}>
            <li className="header__button">
              <img src={Home} alt="Home" />
              Home
            </li>
            <li className="header__button">
              <img src={Search} alt="Search" />
              Search
            </li>
            <li className="header__button">
              <img src={Profile} alt="Profile" />
              Profile
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
