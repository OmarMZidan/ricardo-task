import FavoriteIcon from "@material-ui/icons/Favorite";
import { Theme, withStyles, createStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { State } from "../../Redux";
import { Link } from "react-router-dom";

const FavouritesBadge = () => {
  const favourites = useSelector((state: State) => state.favourites);

  const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
      badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
      },
    })
  )(Badge);
  return (
    <Link to={"/favourites"} style={{ textDecoration: "none" }}>
      <IconButton aria-label="favourites">
        <StyledBadge
          badgeContent={favourites.length}
          showZero
          color="secondary"
        >
          <FavoriteIcon style={{ color: "#ef7310" }} />
        </StyledBadge>
      </IconButton>
    </Link>
  );
};

export default FavouritesBadge;
