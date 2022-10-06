import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { MoviesDetails } from "./pages/MoviesDetails";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={"/movie/:movieId"} exact component={MoviesDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
