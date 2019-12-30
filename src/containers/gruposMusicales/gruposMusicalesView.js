import React from "react";
import GruposMusicalescontainer from "./gruposMusicalesContainer";
import GruposMusicalesProvider from "./gruposMusicalesProvider";

const GruposMusicalesView = () => (
  <GruposMusicalesProvider>
    <GruposMusicalescontainer />
  </GruposMusicalesProvider>
);

export default GruposMusicalesView;
