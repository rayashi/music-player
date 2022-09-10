import { useEffect, useRef, useState } from "react";
import Controls from "./controls";
import "./player.css";

const Player = ({ source, meta }) => {
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
        onTimeUpdate={() =>
          setProgress(
            (audioRef.current?.currentTime / audioRef.current?.duration) * 100
          )
        }
      />
      <img className="music-image" src={meta.image} alt="Album" />
      <h3 className="music-title">{meta.name}</h3>
      <h5 className="music-artist">{meta.artist}</h5>
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
