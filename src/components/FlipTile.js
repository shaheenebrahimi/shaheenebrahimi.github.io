

// styling imports
import '../styling/FlipTile.css';

function FlipTile({image, title, description, link}) {

    return (
        <div className="FlipTile">
        <div className="FlipTile-inner">
          <div className="FlipTile-front">
            <img src={image}/>
          </div>
          <div className="FlipTile-back">
            <h1>{title}</h1> 
            <p>{description}</p>
            <a href={link} target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default FlipTile;