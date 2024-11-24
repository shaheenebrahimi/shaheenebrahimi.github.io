// styling imports
import '../styling/MenuBar.css';

// resource imports
import logo from '../resources/Logo-Dark.png'

function MenuBar() {
    return (
      <nav className="MenuBar">
        <div className="MenuBar-logo">
            <img src={logo}></img>
        </div>
        
        <ul className="MenuBar-nav">
            <li><a>Research</a></li>
            <li><a>Projects</a></li>
        </ul>
      </nav>
    );
  }
  
  export default MenuBar;