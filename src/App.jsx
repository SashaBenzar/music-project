import { Menu, Library, Home } from './Components';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Menu />
      <Library />
      <Home />
    </div>
  );
};
