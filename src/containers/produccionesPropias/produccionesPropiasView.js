import React from "react";
import ProduccionesPropiascontainer from "./produccionesPropiasContainer";
import ProduccionesPropiasProvider from "./produccionesPropiasProvider";

const ProduccionesPropiasView = () => (
  <ProduccionesPropiasProvider>
    <ProduccionesPropiascontainer />
  </ProduccionesPropiasProvider>
);

export default ProduccionesPropiasView;
