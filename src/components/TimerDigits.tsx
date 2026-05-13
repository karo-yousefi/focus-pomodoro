import { themes } from "../constants/themes";
import { useTheme } from "../contexts/ThemeContext";

const TimerDigits = ({ time, openTimerModal, isStarted }: {
  time: number;
  openTimerModal: () => void;
  isStarted: boolean;
}) => {

  const { theme } = useTheme();

  const formatTime = (timeToFormat: number) => {
    let min: string | number = 0;
    let sec: string | number = 0;

    min = Math.floor(timeToFormat / 60);
    sec = timeToFormat - (min * 60);

    if (min < 10) {
      min = "0" + min.toString();
    }

    if (sec < 10) {
      sec = "0" + sec.toString();
    }

    return `${min}:${sec}`
  }

  return (
    <div onClick={!isStarted ? openTimerModal : () => { }} className="p-10 select-none cursor-pointer">
      <p
        className="text-8xl font-light transition-all duration-200"
        style={{ color: themes[theme].text }}
      >
        {formatTime(time)}
      </p>
    </div>
  )
}

export default TimerDigits