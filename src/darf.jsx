import React, { useState, useEffect } from 'react';
import alarmSound from './assets/timer.mp3';
import background from './assets/picture.jpg';

const Draf = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isWorkInterval, setIsWorkInterval] = useState(true);
  const [intervalCount, setIntervalCount] = useState(0);
  const [audio, setAudio] = useState(new Audio(alarmSound));

  useEffect(() => {

    let interval;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            audio.play();
            if (isWorkInterval) {
              if (intervalCount < 3) {
                setMinutes(5);
                setSeconds(0);
                setIsWorkInterval(false);
                setIntervalCount(intervalCount + 1);
              } else {
                setIntervalCount(0);
              }
            } else {
              setMinutes(25);
              setIsWorkInterval(true);
            }
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused, minutes, seconds, isWorkInterval, intervalCount, audio]);

  const handleButtonClick = () => {
    if (!isActive) {
      setIsActive(true);
      setIsPaused(false);
      audio.pause();
      audio.currentTime = 0;
    } else {
      togglePause();
    }
  };

  const getButtonLabel = () => {
    if (!isActive || isPaused) return 'Start';
    return 'Pause';
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className='w-auto h-screen relative'>
      <div>
        <img src={background} className='absolute -z-10 object-cover w-full h-full'/>
      </div>
      <div className='pt-80 flex flex-col items-center gap-20 '>
        <p className='text-9xl text-white'>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
        <div className='navbar flex gap-12 items-center justify-center'>
          <button onClick={handleButtonClick}>
            {getButtonLabel()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Draf ;
