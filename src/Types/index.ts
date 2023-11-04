export type TitleType = {
  image: string;
  children: string;
};

export type Music = {
  title: string;
  author: string;
  genre: string;
  rate: number;
  lyric: string;
  artwork: string;
  url: string;
  id: string;
};

export type InfoType = {
  open: boolean;
  tracks: Music[];
  index: number;
  setIndex: (index: number | ((prev: number) => number)) => void;
  musicRef: React.MutableRefObject<HTMLMediaElement>;
  duration: number;
  formatTime: (index: number) => string;
};

export type ProgressType = {
  musicRef: React.MutableRefObject<HTMLMediaElement>;
  duration: number;
  elapsed: number;
};

export type SettingsType = {
  musicRef: React.MutableRefObject<HTMLMediaElement>;
  open: boolean;
  setOpen: (open: boolean) => void;
  mute: boolean;
  setMute: (mute: boolean) => void;
  isLoop: boolean;
  setLoop: (isLoop: boolean) => void;
  tracks: Music[];
  setTracks: React.Dispatch<React.SetStateAction<Music[] | undefined>>;
};

export type DisplayType = {
  tracks: Music[];
  index: number;
};

export type ControlsType = {
  musicRef: React.MutableRefObject<HTMLMediaElement>;
  duration: number;
  elapsed: number;
  setElapsed: (elapsed: number) => void;
  index: number;
  setIndex: (index: number | ((prev: number) => number)) => void;
  tracks: Music[];
  toggleNext: () => void;
  formatTime: (index: number) => string;
};
