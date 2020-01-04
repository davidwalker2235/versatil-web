import React from "react";
import QuienesSomoscontainer from "./quienesSomosContainer";
import QuienesSomosProvider from "./quienesSomosProvider";

const QuienesSomosView = () => (
  <QuienesSomosProvider>
    <QuienesSomoscontainer />
  </QuienesSomosProvider>
);

export default QuienesSomosView;
