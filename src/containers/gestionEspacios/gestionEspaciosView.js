import React from "react";
import GestionEspacioscontainer from "./gestionEspaciosContainer";
import GestionEspaciosProvider from "./gestionEspaciosProvider";

const GestionEspaciosView = () => (
  <GestionEspaciosProvider>
    <GestionEspacioscontainer />
  </GestionEspaciosProvider>
);

export default GestionEspaciosView;
