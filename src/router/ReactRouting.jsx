import React from "react";
import { Route, Switch } from "react-router-dom";
import History from "../component/History";
import Home from "../component/Home";
import SpacexDetails from "../component/SpacexDetails";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/history" exact component={History} />
        <Route path="/more/:id" exact component={SpacexDetails} />
      </Switch>
    </>
  );
}
