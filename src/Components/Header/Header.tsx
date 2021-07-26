import { Link } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import FavouritesBadge from "../FavouritesBadge/FavouritesBadge";
import "./Header.style.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <img src={logo} alt="Ricardo logo" className="header__logo" />
      </Link>
      <FavouritesBadge />
    </div>
  );
};

export default Header;
