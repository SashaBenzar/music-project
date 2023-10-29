import { Routes, Route } from 'react-router-dom';
import { Menu, Library, Home, Search, Profile, Playlist, Player } from './Components';
import { Player_info } from 'Common/index';
import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Menu />
      <Library />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
      <Player />
    </div>
  );
};
