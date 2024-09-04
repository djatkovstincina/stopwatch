import React from 'react';
import '../styles/components/timer-display.scss';

interface TimerDisplayProps {
  timeElapsed: number;
  targetDuration: number;
}

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeElapsed, targetDuration }) => {
  return (
    <>
      <p className='c-timer-display--duration'>Target Duration: {formatTime(targetDuration)}</p>
      <div className="c-timer-display">
        <div className="c-timer-display--time">{formatTime(timeElapsed)}</div>
      </div>
    </>
  );
};

export default TimerDisplay;
