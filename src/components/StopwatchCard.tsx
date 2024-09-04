import React, { useState, useEffect } from 'react';
import TimerDisplay from './TimerDisplay';
import UserInput from './UserInput';
import '../styles/components/stopwatch-card.scss';

interface StopwatchCardProps {
    action: 'start' | 'stop' | 'reset';
}

const StopwatchCard: React.FC<StopwatchCardProps> = ({ action }) => {
    const [targetDuration, setTargetDuration] = useState<number>(0);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [reset, setReset] = useState<boolean>(false);

    const handleStart = React.useCallback(() => {
        setIsRunning(true);
    }, []);
    
    const handlePause = React.useCallback(() => {
        setIsRunning(false);
    }, []);
    
    const handleReset = React.useCallback(() => {
        setIsRunning(false);
        setTimeElapsed(0);
        setTargetDuration(0);
        setReset(true);
        setTimeout(() => setReset(false), 0);
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTimeElapsed(prev => prev + 1);
            }, 1000);
        } else if (!isRunning && timeElapsed !== 0) {
            clearInterval(interval!);
        }
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isRunning, timeElapsed]);

    useEffect(() => {
        switch (action) {
            case 'start':
                handleStart();
                break;
            case 'stop':
                handlePause();
                break;
            case 'reset':
                handleReset();
                break;
            default:
                break;
        }
    }, [action, handleStart, handlePause, handleReset]);

    return (
        <div className="c-stopwatch--card">
            <UserInput setTargetDuration={setTargetDuration} reset={reset} />
            <TimerDisplay timeElapsed={timeElapsed} targetDuration={targetDuration} />
        </div>
    );
};

export default StopwatchCard;
