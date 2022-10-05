import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { MoviesDetails } from "./pages/MoviesDetails";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Route path={`/movie/:movieID`} exact component={MoviesDetails} />
    </BrowserRouter>
  );
};

export default Routes;
