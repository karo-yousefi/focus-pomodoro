const pomodoroTimes = [
  {
    id: 0,
    title: "10:00",
    timeInSec: 3,
  },
  {
    id: 1,
    title: "20:00",
    timeInSec: 1200,
  },
  {
    id: 2,
    title: "25:00",
    timeInSec: 1500,
  },
  {
    id: 3,
    title: "30:00",
    timeInSec: 1800,
  },
  {
    id: 4,
    title: "45:00",
    timeInSec: 2700,
  },
  {
    id: 5,
    title: "60:00",
    timeInSec: 3600,
  } as const,
];

export {
  pomodoroTimes,
}