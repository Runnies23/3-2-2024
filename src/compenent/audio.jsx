import React, { useState, useEffect } from 'react';
import alarmSound from '../assets/alarm.mp3';

const AudioPlayer = () => {
  const [audio] = useState(new Audio(alarmSound));
  const [isPlaying, setIsPlaying] = useState(false);
  const [loop, setLoop] = useState(false);

  useEffect(() => {
    // Play or pause the audio based on the isPlaying state
    isPlaying ? audio.play() : audio.pause();
    
    // Return a cleanup function to pause the audio when the component unmounts
    return () => {
      audio.pause();
    };
  }, [isPlaying, audio]);

  useEffect(() => {
    // Set the audio loop property based on the loop state
    audio.loop = loop;
  }, [loop, audio]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleLoop = () => {
    setLoop(!loop);
  };

  return (
    <div>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={toggleLoop}>{loop ? 'Disable Loop' : 'Enable Loop'}</button>
    </div>
  );
};

export default AudioPlayer;
