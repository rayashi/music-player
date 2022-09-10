import "./App.css";
import Player from "./components/player/player";
import music from "./assets/music.mp3";
import album from "./assets/album.jpg";

function App() {
  return (
    <div className="App">
      <Player
        source={music}
        meta={{
          name: "Down With Your Getup",
          artist: "Mini Vandals",
          image: album,
        }}
      />
    </div>
  );
}

export default App;
