import React from 'react';
import '../styles/components/stopwatch.scss';

interface StopwatchProps {
    setAction: React.Dispatch<React.SetStateAction<'start' | 'stop' | 'reset'>>;
}

const Stopwatch: React.FC<StopwatchProps> = ({ setAction }) => {

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.id as 'start' | 'stop' | 'reset';
        if (value) {
            setAction(value);
        }
    };

    return (
        <div className="clock">
            <input type="radio" name="timer" id="start" onChange={handleRadioChange} />
            <input type="radio" name="timer" id="reset" onChange={handleRadioChange} />
            <input type="radio" name="timer" id="stop" onChange={handleRadioChange} />

            {/* Top Button */}
            <label className="btn pause-watch" htmlFor="stop"></label>
            <div className="btn"></div>

            {/* Right Button */}
            <label className="btn right start-watch" htmlFor="start"></label>
            <div className="btn right"></div>

            {/* Left Button */}
            <label className="btn left stop-watch" htmlFor="reset"></label>
            <div className="btn left"></div>

            {/* Clock */}
            <span className="axis tiny"></span>
            <span className="axis"></span>
            <span className="second-hand"></span>
            <span className="clock-face clock-face-12"></span>
            <span className="clock-face seconds second-1"></span>
            <span className="clock-face seconds second-2"></span>
            <span className="clock-face seconds second-3"></span>
            <span className="clock-face seconds second-4"></span>
            <span className="clock-face clock-face-1"></span>
            <span className="clock-face seconds second-6"></span>
            <span className="clock-face seconds second-7"></span>
            <span className="clock-face seconds second-8"></span>
            <span className="clock-face seconds second-9"></span>
            <span className="clock-face clock-face-2"></span>
            <span className="clock-face seconds second-11"></span>
            <span className="clock-face seconds second-12"></span>
            <span className="clock-face seconds second-13"></span>
            <span className="clock-face seconds second-14"></span>
            <span className="clock-face clock-face-3"></span>
            <span className="clock-face seconds second-16"></span>
            <span className="clock-face seconds second-17"></span>
            <span className="clock-face seconds second-18"></span>
            <span className="clock-face seconds second-19"></span>
            <span className="clock-face clock-face-4"></span>
            <span className="clock-face seconds second-21"></span>
            <span className="clock-face seconds second-22"></span>
            <span className="clock-face seconds second-23"></span>
            <span className="clock-face seconds second-24"></span>
            <span className="clock-face clock-face-5"></span>
            <span className="clock-face seconds second-26"></span>
            <span className="clock-face seconds second-27"></span>
            <span className="clock-face seconds second-28"></span>
            <span className="clock-face seconds second-29"></span>
            <span className="clock-face clock-face-6"></span>
            <span className="clock-face seconds second-31"></span>
            <span className="clock-face seconds second-32"></span>
            <span className="clock-face seconds second-33"></span>
            <span className="clock-face seconds second-34"></span>
            <span className="clock-face clock-face-7"></span>
            <span className="clock-face seconds second-36"></span>
            <span className="clock-face seconds second-37"></span>
            <span className="clock-face seconds second-38"></span>
            <span className="clock-face seconds second-39"></span>
            <span className="clock-face clock-face-8"></span>
            <span className="clock-face seconds second-41"></span>
            <span className="clock-face seconds second-42"></span>
            <span className="clock-face seconds second-43"></span>
            <span className="clock-face seconds second-44"></span>
            <span className="clock-face clock-face-9"></span>
            <span className="clock-face seconds second-46"></span>
            <span className="clock-face seconds second-47"></span>
            <span className="clock-face seconds second-48"></span>
            <span className="clock-face seconds second-49"></span>
            <span className="clock-face clock-face-10"></span>
            <span className="clock-face seconds second-51"></span>
            <span className="clock-face seconds second-52"></span>
            <span className="clock-face seconds second-53"></span>
            <span className="clock-face seconds second-54"></span>
            <span className="clock-face clock-face-11"></span>
            <span className="clock-face seconds second-56"></span>
            <span className="clock-face seconds second-57"></span>
            <span className="clock-face seconds second-58"></span>
            <span className="clock-face seconds second-59"></span>
        </div>
    );
};

export default Stopwatch;
