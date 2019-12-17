import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store, history } from "./store";

import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import { AppView } from "./containers/app/appView";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={AppView} />
      </Switch>
    </ConnectedRouter>
  </Provider>,

  document.getElementById("root")
);
