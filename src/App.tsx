import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import "./App.scss";
import { Home, Search } from "./Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search/:searchText" component={Search} />
          <Route>404 NOT FOUND!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
