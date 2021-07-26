import { Fragment } from "react";
import { useSelector } from "react-redux";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import GoHome from "../../Components/GoHome/GoHome";
import { State } from "../../Redux";

const FavouritesList = () => {
  const favourites = useSelector((state: State) => state.favourites);

  const renderList = favourites?.map((article) => (
    <ArticleCard article={article} key={article.id} icon="delete" />
  ));

  return (
    <div className="container">
      {favourites.length > 0 ? (
        <Fragment>
          <div className="cards">{renderList}</div>
        </Fragment>
      ) : (
        <GoHome>
          <h1>Your favorites list is empty!</h1>
        </GoHome>
      )}
    </div>
  );
};

export default FavouritesList;
