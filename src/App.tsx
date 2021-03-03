import React, { FC } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Home";
import loginForm from "./Pages/Login";

const App: FC = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/login" component={loginForm} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
