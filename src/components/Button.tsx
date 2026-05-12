import { useTheme } from "../contexts/ThemeContext";
import { themes } from "../constants/themes";


const Button = ({ title, onClick }: {
  title: string;
  onClick: () => void;
}) => {
  const { theme } = useTheme();

  return (
    <div
      className="px-5 py-2 m-2 rounded-lg cursor-pointer transition-all opacity-100 hover:opacity-80 hover:translate-y-px active:translate-y-0.5 active:opacity-70 text-xl select-none"
      style={{ backgroundColor: themes[theme].primary, color: themes[theme].background }}
      onClick={onClick}
    >
      {title}
    </div>
  )
}


export default Button;