import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import { Home, Search, ProductDetails, NotFound } from "../Pages";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search/:searchText" component={Search} />
        <Route path="/article/:articleId" component={ProductDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
