import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import { State } from "../../Redux";

const FavouritesList = () => {
  const favourites = useSelector((state: State) => state.favourites);

  const renderList = favourites?.map((article) => (
    <ArticleCard article={article} key={article.id} />
  ));

  return (
    <div className="container">
      {favourites ? (
        <>
          <div className="cards">{renderList}</div>
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default FavouritesList;
