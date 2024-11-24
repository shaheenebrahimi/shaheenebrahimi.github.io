

// styling imports
import '../styling/FlipTile.css';

function FlipTile({resource, content}) {
    return (
        <div class="FlipTile">
        <div class="FlipTile-inner">
          <div class="FlipTile-front">
            <img src={resource}/>
          </div>
          <div class="FlipTile-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default FlipTile;