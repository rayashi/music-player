import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "../progress-bar/progress-bar";

const Controls = ({
  duration,
  progress,
  isPlaying,
  onPlayPause,
  onTimeChange,
}) => {
  return (
    <div className="controls">
      <div className="control-progress">
        <ProgressBar value={progress} />
      </div>
      <div className="control-buttons">
        <button>
          <FontAwesomeIcon icon={faShuffle} />
        </button>
        <button>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className="play-button" onClick={onPlayPause}>
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
        <button>
          <FontAwesomeIcon icon={faForward} />
        </button>
        <button>
          <FontAwesomeIcon icon={faRepeat} />
        </button>
      </div>
    </div>
  );
};

export default Controls;
