import React from "react";
import Iniciocontainer from "./inicioContainer";
import InicioProvider from "./inicioProvider";

const InicioView = () => (
  <InicioProvider>
    <Iniciocontainer />
  </InicioProvider>
);

export default InicioView;
