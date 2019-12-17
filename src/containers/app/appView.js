import React from "react";
import AppContainer from "./appContainer";
import AppProvider from "./appProvider";

export const AppView = () => (
  <AppProvider>
    <AppContainer />
  </AppProvider>
);
