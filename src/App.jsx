import { Menu, Library, Home, Search, Profile } from './Components';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Menu />
      <Library />
      <Profile />
    </div>
  );
};
