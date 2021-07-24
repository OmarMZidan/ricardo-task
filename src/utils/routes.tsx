import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import { Home, Search } from "../Pages";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search/:searchText" component={Search} />
        <Route path="/article/:articleId" component={ProductDetails} />
        <Route>404 NOT FOUND!</Route>
      </Switch>
    </Router>
  );
};

export default Routes;
