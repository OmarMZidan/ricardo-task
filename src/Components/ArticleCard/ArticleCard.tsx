import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Article } from "../../utils/interfaces";
import "./ArticleCard.style.scss";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../Redux";
import { useDispatch, useSelector } from "react-redux";

interface IProps {
  article: Article;
  icon?: string;
}

const ArticleCard = ({ article, icon = "add" }: IProps) => {
  const { id, title, imageUrl, endDate, buyNowPrice } = article;
  const favourites = useSelector((state: State) => state.favourites);
  const added = favourites.find((obj) => obj.id === article.id);
  const dispatch = useDispatch();

  const { AddProductToFavourites, RemoveProductFromFavourites } =
    bindActionCreators(actionCreators, dispatch);

  // const convertDate = (date: string) => {
  //   let convertedDate = new Date(date).toUTCString();
  //   console.log(convertedDate);
  //   return convertedDate;
  // };

  const handleAddToFavourite = (article: Article) => {
    // check if the article object already exist in the favourites array before adding
    if (!(favourites.filter((e) => e.id === article.id).length > 0)) {
      AddProductToFavourites(article);
    }
  };

  return (
    <div className="card">
      <Link to={`/article/${id}`} style={{ textDecoration: "none" }}>
        <div className="card__image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="card__content">
          <div className="title">{title}</div>
          <div className="date">
            <span>Ending on:</span> {new Date(endDate).toUTCString()}
          </div>
          {buyNowPrice && <div className="price">{buyNowPrice} CHF</div>}
        </div>
      </Link>
      <div className="favBtn">
        {icon === "add" && (
          <IconButton
            aria-label="add"
            onClick={() => handleAddToFavourite(article)}
          >
            <FavoriteIcon style={{ color: added ? "#ef7310" : "unset" }} />
          </IconButton>
        )}
        {icon === "delete" && (
          <IconButton
            aria-label="delete"
            onClick={() => RemoveProductFromFavourites(article.id)}
          >
            <DeleteIcon style={{ color: "red" }} />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
