import { useHistory } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import FavouritesBadge from "../FavouritesBadge/FavouritesBadge";
import "./Header.style.scss";

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="header">
      <a href="/" onClick={handleClick}>
        <img src={logo} alt="Ricardo logo" className="header__logo" />
      </a>
      <FavouritesBadge />
    </div>
  );
};

export default Header;
