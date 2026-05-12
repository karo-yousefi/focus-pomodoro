import { useTheme } from "../contexts/ThemeContext";
import { themes } from "../constants/themes";

import ThemeSelector from "./ThemeSelector";




const Header = () => {
  const { theme } = useTheme();


  return (
    <div
      className="w-full h-12 border-b flex justify-between items-center gap-2 absolute top-0 px-5 transition-all duration-150"
      style={{ backgroundColor: themes[theme].background, borderColor: themes[theme].text }}
    >
      <div>
        <p>placeholder</p>
      </div>
      <ThemeSelector />
    </div>
  )
}

export default Header;