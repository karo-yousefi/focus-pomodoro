import { useTheme } from "./contexts/ThemeContext";
import { themes } from "./constants/themes";
import Timer from "./components/Timer";
import Header from "./components/Header";

const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className="flex justify-center items-center w-screen h-screen transition-all duration-500"
      style={{ backgroundColor: themes[theme].background }}
    >
      <Header />
      <Timer />
    </div>
  )
}

export default App