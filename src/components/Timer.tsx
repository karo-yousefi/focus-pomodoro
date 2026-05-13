import { useEffect, useState, useRef } from "react";
import TimerControls from "./TimerControls";
import { useTheme } from "../contexts/ThemeContext";
import { themes } from "../constants/themes";
import TimerDigits from "./TimerDigits";
import TimerModal from "./TimerModal";


const Timer = () => {
  const { theme } = useTheme();

  const timerElement = useRef<HTMLDivElement | null>(null);
  const coverElement = useRef<HTMLDivElement | null>(null);

  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isTimerModalOpen, setIsTimerModalOpen] = useState<boolean>(false);
  const [fullTime, setFulltime] = useState<number>(100);

  const handleStart = () => {
    setIsStarted(true);
  }

  const handleStop = () => {
    setIsStarted(false)
  }

  const updateFullTime = (time: number) => {
    setFulltime(time)
  }


  const openTimerModal = () => {
    if (!isTimerModalOpen) {
      setIsTimerModalOpen(true);
    }
  }

  const closeTimerModal = () => {
    if (isTimerModalOpen) {
      setIsTimerModalOpen(false);
    }
  }



  useEffect(() => {
    const timerEl = timerElement.current;
    const coverEl = coverElement.current;

    if (timerEl && coverEl) {
      timerEl.style.setProperty("--primary-color", themes[theme].primary);
      timerEl.style.setProperty("--text-color", themes[theme].text);
      coverEl.style.setProperty("--bg-color", themes[theme].background);

      timerEl.style.setProperty("--progress", "70%");
    }
  }, [theme])

  return (
    <div className="flex flex-col justify-center items-center gap-10 -mt-20">
      {/* timer */}
      <div className="relative w-100 h-100">
        <div className="timer">
          <div ref={timerElement} className="progress transition-all duration-500">
          </div>
          <div ref={coverElement} className="cover transition-all duration-200">
            <TimerDigits time={fullTime} openTimerModal={openTimerModal} />
          </div>
        </div>
      </div>

      {/* controls */}
      <TimerControls isStarted={isStarted} handleStart={handleStart} handleStop={handleStop} />

      {/* modal to set the timer */}
      <TimerModal closeTimerModal={closeTimerModal} isTimerModalOpen={isTimerModalOpen} updateFullTime={updateFullTime} />
    </div>
  )
}

export default Timer