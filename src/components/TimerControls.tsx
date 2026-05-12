import { useTheme } from "../contexts/ThemeContext";
import { themes } from "../constants/themes";
import Button from "./Button";

const TimerControls = ({ isStarted, handleStart, handleStop }: {
  isStarted: boolean;
  handleStart: () => void;
  handleStop: () => void;
}) => {

  const { theme } = useTheme();

  return (
    <div
      className=""
    >
      {
        isStarted ?
          <Button title="Stop" onClick={handleStop} /> :
          <Button title="Start" onClick={handleStart} />
      }
    </div>
  )
}


export default TimerControls;