import React, { useState } from 'react';
import './style.scss';
import StopwatchCard from './components/StopwatchCard';
import Stopwatch from './components/Stopwatch';

const App: React.FC = () => {
  const [action, setAction] = useState<'start' | 'stop' | 'reset'>('reset');

  return (
    <div className="o-stopwatch-page">
      <h1 className='o-stopwatch-page--title'>Stopwatch</h1>
      <p className='o-stopwatch-page--desc'>Click on stopwatch buttons to 
        <span className='c-square--red'></span>start, 
        <span className='c-square--blue'></span>pause, 
        <span className='c-square--black'></span>reset.
      </p>
      <Stopwatch setAction={setAction} />
      <StopwatchCard action={action} />
    </div>
  );
};

export default App;