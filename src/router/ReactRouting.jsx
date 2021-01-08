import React from "react";
import { Route, Switch } from "react-router-dom";
import ComposeMessage from "../component/ComposeMessage";
import ContactInfo from "../component/ContactInfo";
import Home from "../component/Home";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contactInfo/:id" exact component={ContactInfo} />
        <Route path="/composemsg" exact component={ComposeMessage} />
      </Switch>
    </>
  );
}
