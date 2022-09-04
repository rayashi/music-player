import { useRef } from "react";
import Controls from "./controls";
import "./player.css";

const Player = ({ source }) => {
  const audioRef = useRef();

  const onUpdate = () => {};

  return (
    <div>
      <audio src={source} ref={audioRef} onTimeUpdate={onUpdate} />
      <Controls />
    </div>
  );
};

export default Player;
