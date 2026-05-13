import Button from "./Button";

const TimerControls = ({ handleStart, handleStop, hasCountdownFinished }: {
  hasCountdownFinished: boolean;
  handleStart: () => void;
  handleStop: () => void;
}) => {


  return (
    <div
      className=""
    >
      {
        hasCountdownFinished ?
          <Button title="Restart" onClick={handleStop} /> :
          <Button title="Start" onClick={handleStart} />
      }
    </div>
  )
}


export default TimerControls;