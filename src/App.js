import "./App.css";
import Player from "./components/player/player";

function App() {
  return (
    <div className="App">
      <Player source="https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse" />
    </div>
  );
}

export default App;
