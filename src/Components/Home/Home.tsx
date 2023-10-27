import styles from './Home.module.scss';
import { Title, List } from 'Common/index';
import History from 'Image/SVG/Home/history.svg';
import Top from 'Image/SVG/Home/top.svg';
import New from 'Image/SVG/Home/new.svg';

export const Home: React.FC = () => {
  return (
    <div className={styles.home__container}>
      <div className={styles.home__interest}>
        <Title image={History}>History</Title>
        <List />
      </div>
      <div className={styles.home__interest}>
        <Title image={Top}>Top</Title>
        <List />
      </div>
      <div className={styles.home__interest}>
        <Title image={New}>New</Title>
        <List />
      </div>
    </div>
  );
};
