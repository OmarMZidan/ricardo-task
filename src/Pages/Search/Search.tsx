import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSearchResult } from "../../utils/api";
import { SearchData } from "./../../utils/interfaces";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import "./Search.style.scss";
import { CircularProgress } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

const Search = () => {
  const { searchText } = useParams<{ searchText: string }>();
  const [searchResult, setSearchResult] = useState<SearchData | undefined>(
    undefined
  );
  const [page, setPage] = useState(1); //page number
  const productsPerPage = 30; //number of products showed per page
  const [totalPages, setTotalPages] = useState(0);
  const startIndex = (page - 1) * productsPerPage;
  //get selected products to be shown on this page
  const selectedProducts = searchResult?.articles.slice(
    startIndex,
    startIndex + productsPerPage
  );

  useEffect(() => {
    getSearchResult(searchText).then((response) => {
      setSearchResult(response?.data);
      setTotalPages(
        Math.ceil(response!.data.articles.length / productsPerPage)
      );
    });
  }, [searchText]);
  //render selected products using article card component
  const renderList = selectedProducts?.map((article) => (
    <ArticleCard article={article} key={article.id} />
  ));

  return (
    <div className="container">
      {searchResult ? (
        <Fragment>
          <p className="count">Total count: {searchResult.totalCount}</p>
          <div className="cards">{renderList}</div>
          <div className="pagination">
            <Pagination
              count={totalPages}
              color="primary"
              variant="outlined"
              onChange={(e, value) => setPage(value)}
            />
          </div>
        </Fragment>
      ) : (
        //show loader if search result is not ready yet
        <CircularProgress />
      )}
    </div>
  );
};

export default Search;
