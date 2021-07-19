import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../Pages";

const routes = () => {
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/product/:productId" component={ProductDetails} /> */}
      <Route>404 NOT FOUND!</Route>
    </Switch>
  </Router>;
};

export default routes;
