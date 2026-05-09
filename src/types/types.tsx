import { themes } from "../constants/themes";


interface ThemeType {
  name: string;
  background: string;
  text: string;
  primary: string;
};

type Theme = keyof typeof themes;

interface ContextType {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};


export type {
  ThemeType,
  ContextType,
  Theme,
};