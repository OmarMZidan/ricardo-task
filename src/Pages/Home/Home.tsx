import { Button, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Home.style.scss";

const Home = () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    history.push(`/search/${searchText}`);
  };

  return (
    <div className="home">
      <TextField
        id="outlined-search"
        label="Search text"
        type="search"
        variant="outlined"
        autoFocus
        fullWidth
        className="searchInput"
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <Button
        variant="outlined"
        color="primary"
        size="large"
        startIcon={<SearchIcon />}
        //disabled if the search text is empty
        disabled={!searchText}
        onClick={handleSearchClick}
      >
        SEARCH
      </Button>
    </div>
  );
};

export default Home;
