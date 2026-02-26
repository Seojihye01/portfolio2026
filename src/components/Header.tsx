import { useLocation, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();

  // 현재 경로가 메인('/')이면 true
  const isMainPage = location.pathname === "/";

  return (
    <div
      className={`header-container ${isMainPage ? "main-header" : "sub-header"}`}
    >
      <div className="header">
        <h2 className="logo">
          <Link to="/">
            {/* 메인일 때 흰색 로고, 아닐 때 검정 로고 (파일 이름에 맞게 수정) */}
            <img
              src={isMainPage ? "./media/logo_w.png" : "./media/logo_b.png"}
              alt="logo"
            />
          </Link>
        </h2>

        <ul className="menubar">
          <li className="menu-item">
            <Link to="/curation">CURATION</Link>
            <ul className="submenu">
              <li>
                <Link to="/curation/sub1">Curation Sub 1</Link>
              </li>
              <li>
                <Link to="/curation/sub2">Curation Sub 2</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <Link to="/explore">EXPLORE</Link>
            <ul className="submenu">
              <li>
                <Link to="/explore/sub1">Explore Sub 1</Link>
              </li>
              <li>
                <Link to="/explore/sub2">Explore Sub 2</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <Link to="/funding">FUNDING</Link>
            <ul className="submenu">
              <li>
                <Link to="/funding/sub1">Funding Sub 1</Link>
              </li>
              <li>
                <Link to="/funding/sub2">Funding Sub 2</Link>
              </li>
            </ul>
          </li>
        </ul>

        <div className="icon-group">
          <span className="icon">
            <img
              src={
                isMainPage ? "./media/searchI_w.png" : "./media/searchI_b.png"
              }
            />
          </span>
          <span className="icon">
            <img
              src={isMainPage ? "./media/userI_w.png" : "./media/userI_b.png"}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
