import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import { Home, Search, ProductDetails, NotFound } from "../Pages";
import FavouritesList from "../Pages/FavouritesList/FavouritesList";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favourites" exact component={FavouritesList} />
        <Route path="/search/:searchText" component={Search} />
        <Route path="/article/:articleId" component={ProductDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
