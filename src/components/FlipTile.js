

// styling imports
import '../styling/FlipTile.css';

function FlipTile({image, title, description, tags, link}) {

    return (
        <div className="FlipTile">
        <div className="FlipTile-inner">
          <div className="FlipTile-front">
            <img src={image} alt={title}/>
          </div>
          <div className="FlipTile-back">
            <h1>{title}</h1> 
            <p><b>Description</b><br/>{description}</p>
            <p><b>Skills</b><br/>{tags}</p>
            <a href={link} target="_blank" rel="noreferrer" className="Button FlipTile-button">GitHub</a>
          </div>  
        </div>
      </div>
    );
  }
  
  export default FlipTile;