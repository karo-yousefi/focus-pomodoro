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

interface PomodoroTimeType {
  id: number;
  title: string;
  timeInSec: number;
}


export type {
  ThemeType,
  ContextType,
  AvailableThemes,
  PomodoroTimeType,
};