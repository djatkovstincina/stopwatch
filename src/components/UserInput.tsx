import React, { useState, useEffect } from 'react';
import '../styles/components/user-input.scss';

interface UserInputProps {
  setTargetDuration: (duration: number) => void;
  reset: boolean;
}

const UserInput: React.FC<UserInputProps> = ({ setTargetDuration, reset }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSetDuration = () => {
    const duration = parseInt(inputValue);
    if (!isNaN(duration)) {
      setTargetDuration(duration);
    }
  };

  useEffect(() => {
    if (reset) {
      setInputValue('');
    }
  }, [reset]);

  return (
    <div className="c-input">
      <input
        type="number"
        placeholder="Enter target duration (seconds)"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSetDuration}>Set Duration</button>
    </div>
  );
};

export default UserInput;
