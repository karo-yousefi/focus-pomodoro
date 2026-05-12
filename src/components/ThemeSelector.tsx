import { useTheme } from "../contexts/ThemeContext";
import type { AvailableThemes } from "../types/types";
import { themes } from "../constants/themes";


const themesToMapOver = Object.keys(themes) as AvailableThemes[];


const ThemeSelector = () => {
  const { changeTheme } = useTheme();

  return (
    <div className="flex gap-1">
      {
        themesToMapOver.map((t) => {
          return (
            <div
              className="w-7 h-7 rounded-full border border-slate-600 cursor-pointer flex overflow-hidden opacity-100 hover:opacity-80 hover:translate-y-px transition-all"
              key={t}
              title={t}
              onClick={() => changeTheme(t)}
            >
              <div
                className="flex-1"
                style={{ backgroundColor: themes[t].background }}
              ></div>
              <div
                className="flex-1"
                style={{ backgroundColor: themes[t].primary }}
              ></div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ThemeSelector