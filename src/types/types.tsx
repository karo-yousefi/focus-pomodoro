import { themes } from "../constants/themes";


interface ThemeType {
  name: string;
  background: string;
  text: string;
  primary: string;
};

type AvailableThemes = keyof typeof themes;

interface ContextType {
  theme: AvailableThemes;
  changeTheme: (theme: AvailableThemes) => void;
};


export type {
  ThemeType,
  ContextType,
  AvailableThemes,
};