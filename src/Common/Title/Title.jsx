import styles from './Title.module.scss';

export const Title = ({ image = '#', children = '#' }) => {
  return (
    <div className={styles.title}>
      <img src={image} alt="burger" />
      <h1>{children}</h1>
    </div>
  );
};
