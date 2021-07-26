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

  const [page, setPage] = useState(1);
  const productsPerPage = 30;
  const [totalPages, setTotalPages] = useState(0);
  const startIndex = (page - 1) * productsPerPage;
  const selectedProducts = searchResult?.articles.slice(
    startIndex,
    startIndex + productsPerPage
  );

  useEffect(() => {
    getSearchResult(searchText).then((response) => {
      setSearchResult(response?.data);
      console.log(response?.data.articles);
      setTotalPages(
        Math.ceil(response!.data.articles.length / productsPerPage)
      );
    });
  }, [searchText]);

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
        <CircularProgress />
      )}
    </div>
  );
};

export default Search;
