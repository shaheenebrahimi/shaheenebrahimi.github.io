// component imports
import FlipTile from './FlipTile';

// styling imports
import '../styling/TileGrid.css';

// resource imports
import logo from '../resources/Logo-Dark.png'


function TileGrid() {
    return (
        <div className="TileGrid">
            <FlipTile resource={logo} content={"A"}/>
            <FlipTile resource={logo} content={"B"}/>
            <FlipTile resource={logo} content={"C"}/>
            <FlipTile resource={logo} content={"D"}/>
            <FlipTile resource={logo} content={"E"}/>
            <FlipTile resource={logo} content={"F"}/>
        </div>
    );
  }
  
  export default TileGrid;