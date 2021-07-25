import { Link } from "react-router-dom";
import "./NotFound.style.scss";

const NotFound = () => (
  <div className="notFound">
    <h1>404 - Page Not Found!</h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
