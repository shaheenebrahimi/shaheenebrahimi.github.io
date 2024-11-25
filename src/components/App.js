// component imports
import MenuBar from './MenuBar';
import Spotlight from './Spotlight';
import TileGrid from './TileGrid';
import FlipTile from './FlipTile';

// styling imports
import '../styling/App.css';

import logo from '../assets/Logo-Dark.png'

function App() {
  return (
    <>
      <MenuBar />
      <div className="App-spacer"></div>
      <Spotlight />
      <TileGrid />
      {/* <ProjectTile resource={logo}/> */}
    </>
  );

}

export default App;
