// component imports
import MenuBar from './MenuBar';
import Spotlight from './Spotlight';
import TileGrid from './TileGrid';

// styling imports
import '../styling/App.css';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <div className="App-spacer"></div>
      <Spotlight />
      <TileGrid />
    </div>
  );

}

export default App;
