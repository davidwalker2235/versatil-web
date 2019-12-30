import React from "react";
import Decoracionescontainer from "./decoracionesContainer";
import DecoracionesProvider from "./decoracionesProvider";

const DecoracionesView = () => (
  <DecoracionesProvider>
    <Decoracionescontainer />
  </DecoracionesProvider>
);

export default DecoracionesView;
