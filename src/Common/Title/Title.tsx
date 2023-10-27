import styles from './Title.module.scss';
import { TitleType } from '@/Types/index';

export const Title: React.FC<TitleType> = ({ image = '#', children = '#' }) => {
  return (
    <div className={styles.title}>
      <img src={image} alt="burger" />
      <h1>{children}</h1>
    </div>
  );
};
