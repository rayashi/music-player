import "./progress-bar.css";

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar-inner" style={{ width: `${value}%` }} />
    </div>
  );
};

export default ProgressBar;
