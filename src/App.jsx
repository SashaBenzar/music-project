import { Menu, Library, Home } from './Components';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app__menu}>
        <Menu />
        <Library />
      </div>
      <div className={styles.app__content}>
        <Home />
      </div>
    </div>
  );
};
