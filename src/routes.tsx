import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Home";
import Sapatos from "./Pages/Sapatos";
const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/sapatos" exact component={Sapatos} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
