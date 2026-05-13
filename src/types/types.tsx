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

interface CreateContextType {
  localData: string;
  updateLocalDate: (key: string, value: object) => void;
}


export type {
  ThemeType,
  ContextType,
  AvailableThemes,
  PomodoroTimeType,
  CreateContextType,
};