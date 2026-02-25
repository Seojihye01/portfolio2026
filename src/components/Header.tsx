import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <h2 className="logo">
          <a href="#"></a>
          <img src="./media/logo_w.png" alt="logo" />
        </h2>

        <ul className="menubar">
          <li className="menu-item">
            <a href="curation">CURATION</a>
            <ul className="submenu">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="explore">EXPLORE</a>
            <ul className="submenu">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="funding">FUNDING</a>
            <ul className="submenu">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </li>
        </ul>

        <div className="icon-group">
          <span className="icon">
            <img src="./media/searchI.png"></img>
          </span>
          <span className="icon">
            <img src="./media/userI.png"></img>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
