import React, { FC } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Home";
import LoginForm from "./Pages/Login";

const App: FC = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginForm} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
