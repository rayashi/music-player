import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

const Controls = () => {
  return (
    <div className="controls">
      <div className="control-progress">
        <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" />
        </div>
      </div>
      <div className="control-buttons">
        <button>
          <FontAwesomeIcon icon={faShuffle} />
        </button>
        <button>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className="play-button">
          <FontAwesomeIcon icon={faPlay} />
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
