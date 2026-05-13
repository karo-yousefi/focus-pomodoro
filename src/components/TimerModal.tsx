import { useEffect, useState } from "react";
import { pomodoroTimes } from "../constants/misc";
import { themes } from "../constants/themes"
import { useTheme } from "../contexts/ThemeContext"
import type { PomodoroTimeType } from "../types/types";


const TimerModal = ({ closeTimerModal, isTimerModalOpen, updateFullTime }: {
  closeTimerModal: () => void;
  isTimerModalOpen: boolean;
  updateFullTime: (time: number) => void;
}) => {
  const { theme } = useTheme();

  const [selectedPomodoroTime, setSelectedPomodoroTime] = useState<number>(0);


  const selectPomodoroTime = (pomodoroTime: PomodoroTimeType) => {
    updateFullTime(pomodoroTime.timeInSec);
    setSelectedPomodoroTime(pomodoroTime.id)
  }


  useEffect(() => {
    selectPomodoroTime(pomodoroTimes[0]);
  }, [])


  return (
    <div
      className="w-200 h-100 rounded-2xl absolute border z-20 flex flex-col justify-start items-center transition-all duration-400"
      style={{ backgroundColor: themes[theme].background, borderColor: themes[theme].text, opacity: isTimerModalOpen ? 100 : 0, zIndex: isTimerModalOpen ? 20 : -20 }}
    >
      <p
        className="text-4xl cursor-pointer flex justify-end w-full px-6 py-2"
        onClick={closeTimerModal}
      >
        x
      </p>

      <div className="grid grid-cols-3">
        {
          pomodoroTimes.map(pomodoroTime => {
            return (
              <div
                className="w-25 flex justify-start px-2 py-1 m-2 rounded-lg cursor-pointer transition-all opacity-100 hover:opacity-80 hover:translate-y-px active:translate-y-0.5 active:opacity-70 text-xl select-none"
                style={{ backgroundColor: themes[theme].primary, color: themes[theme].background }}
                onClick={() => selectPomodoroTime(pomodoroTime)}
                key={pomodoroTime.id}
              >
                {
                  selectedPomodoroTime === pomodoroTime.id ?
                    pomodoroTime.title + " ✅" :
                    pomodoroTime.title + "  "
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TimerModal