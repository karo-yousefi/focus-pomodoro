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
  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isTimerModalOpen, setIsTimerModalOpen] = useState<boolean>(false);
  const [fullTime, setFulltime] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [hasCountdownFinished, setHasCountdownFinished] = useState<boolean>(false);



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


  const handleStart = () => {
    setIsStarted(true);
  }

  const handleStop = () => {
    console.log("Countdown Stoped");

    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    };

    setIsStarted(false);
  }

  const updateFullTime = (time: number) => {
    setFulltime(time)
  }

  const handleCountdownEnd = () => {
    console.log("Countdown finished");
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    };
    setHasCountdownFinished(true);
    setIsStarted(false);
  };



  useEffect(() => {
    if (isStarted && !timerIntervalRef.current) {
      setHasCountdownFinished(false);
      timerIntervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev === undefined || prev <= 1) {
            handleCountdownEnd();
            return 0;
          };
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    };
  }, [isStarted]);


  useEffect(() => {
    setTime(fullTime);
  }, [fullTime])

  // updating timer progress
  useEffect(() => {
    const timerEl = timerElement.current;
    if (timerEl) {
      const percentage =
        time !== undefined ? (time / fullTime) * 100 : 100;
      timerEl.style.setProperty("--progress", `${percentage}%`);
    }
  }, [time, fullTime]);


  // update theme
  useEffect(() => {
    const timerEl = timerElement.current;
    const coverEl = coverElement.current;

    if (timerEl && coverEl) {
      timerEl.style.setProperty("--primary-color", themes[theme].primary);
      timerEl.style.setProperty("--text-color", themes[theme].text);
      coverEl.style.setProperty("--bg-color", themes[theme].background);

      timerEl.style.setProperty("--progress", "100%");
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
            <TimerDigits time={time} openTimerModal={openTimerModal} isStarted={isStarted} />
          </div>
        </div>
      </div>

      {/* controls */}
      <TimerControls handleStart={handleStart} handleStop={handleStop} hasCountdownFinished={hasCountdownFinished} />

      {/* modal to set the timer */}
      <TimerModal closeTimerModal={closeTimerModal} isTimerModalOpen={isTimerModalOpen} updateFullTime={updateFullTime} />
    </div>
  )
}

export default Timer