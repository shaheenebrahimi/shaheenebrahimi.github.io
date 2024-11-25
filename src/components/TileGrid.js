// component imports
import FlipTile from './FlipTile';

// styling imports
import '../styling/TileGrid.css';

// resource imports
import logo from '../assets/Logo-Dark.png'

// content imports
import content from '../content/flipTiles.json';
import { useEffect, useState} from 'react';

function TileGrid() {

    const images = require.context('../assets', false, /\.(png|jpe?g|svg)$/);

    function getImagePath(imageName) {
    try {
        return images(`./${imageName}`);
    } catch (err) {
        console.error(`Image not found: ${imageName}`);
        return null;
    }
    }

    const tiles = content.map((item, index) => {
        const imagePath = getImagePath(item.image); // Dynamically resolve the image path
        return (
          <FlipTile
            key={`tile-${index}`}
            image={imagePath}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        );
      });

    return (
        <div className="TileGrid">
            {tiles}
        </div>
    );
  }
  
  export default TileGrid;