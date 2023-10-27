import styles from './Search.module.scss';
import { Title } from 'Common/index';
import Sea from 'Image/SVG/Search/search.svg';
import Gen from 'Image/SVG/Search/genres.svg';

export const Search: React.FC = () => {
  return (
    <div className={styles.search__container}>
      <div className={styles.search__bar}>
        <img src={Sea} alt="Search" />
        <input placeholder="Search" />
      </div>
      <div className="search__genres">
        <Title image={Gen}>History</Title>
        <div className={styles.search__blocks}>
          <div>Genre 1</div>
          <div>Genre 2</div>
          <div>Genre 3</div>
          <div>Genre 4</div>
          <div>Genre 5</div>
          <div>Genre 6</div>
          <div>Genre 7</div>
          <div>Genre 8</div>
        </div>
      </div>
    </div>
  );
};
