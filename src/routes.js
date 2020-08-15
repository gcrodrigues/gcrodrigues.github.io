import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, About, Portfolio, Contact, NotFound } from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
