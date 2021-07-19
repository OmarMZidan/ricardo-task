import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSearchResult } from "../../utils/api";

const Search = () => {
  const { searchText } = useParams<{ searchText: string }>();
  useEffect(() => {
    getSearchResult(searchText).then((response) => {
      console.log(response?.data.articles);
    });
  }, [searchText]);
  return (
    <div>
      <h1>Search {searchText}</h1>
    </div>
  );
};

export default Search;
