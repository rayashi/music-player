import { useEffect, useRef, useState } from "react";
import Controls from "./controls";
import "./player.css";

const Player = ({ source }) => {
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  useEffect(() => setDuration(audioRef.current.duration), [source]);

  const onTimeChange = (event) => {
    console.log(event.target.value);
    audioRef.currentTime = event.target.value;
  };

  const onPlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="player">
      <audio
        src={source}
        ref={audioRef}
        onTimeUpdate={() => setProgress(audioRef.current?.currentTime)}
      />
      <Controls
        {...{
          duration,
          progress,
          onTimeChange,
          onPlayPause,
          isPlaying,
          currentTime: audioRef.current?.currentTime,
        }}
      />
    </div>
  );
};

export default Player;
