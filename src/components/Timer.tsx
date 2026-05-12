import { useEffect, useState, useRef } from "react";
import TimerControls from "./TimerControls";
import { useTheme } from "../contexts/ThemeContext";
import { themes } from "../constants/themes";


const Timer = () => {
  const { theme } = useTheme();

  const timerElement = useRef<HTMLDivElement | null>(null);

  const [isStarted, setIsStarted] = useState<boolean>(false);

  const handleStart = () => {
    setIsStarted(true);
  }

  const handleStop = () => {
    setIsStarted(false)
  }

  useEffect(() => {
    const element = timerElement.current;
    if (element) {
      element.style.setProperty("--primary-color", themes[theme].primary);
    }
  }, [theme])

  return (
    <div className="flex flex-col justify-center items-center gap-10 -mt-20">
      {/* timer */}
      <div className="relative w-100 h-100">
        <div className="timer">
          <div ref={timerElement} className="progress">

          </div>
        </div>
      </div>

      {/* controls */}
      <TimerControls isStarted={isStarted} handleStart={handleStart} handleStop={handleStop} />
    </div>
  )
}

export default Timer