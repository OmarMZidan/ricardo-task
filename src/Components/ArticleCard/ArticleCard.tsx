import { Link } from "react-router-dom";
import { Article } from "../../utils/interfaces";
import "./ArticleCard.style.scss";

interface IProps {
  article: Article;
}

const ArticleCard = ({ article }: IProps) => {
  const { id, title, imageUrl, endDate, buyNowPrice } = article;

  // const convertDate = (date: string) => {
  //   let convertedDate = new Date(date).toUTCString();
  //   console.log(convertedDate);
  //   return convertedDate;
  // };
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
    </div>
  );
};

export default ArticleCard;
