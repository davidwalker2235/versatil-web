import React from "react";
import AlquilerEquiposcontainer from "./alquilerEquiposContainer";
import AlquilerEquiposProvider from "./alquilerEquiposProvider";

const AlquilerEquiposView = () => (
  <AlquilerEquiposProvider>
    <AlquilerEquiposcontainer />
  </AlquilerEquiposProvider>
);

export default AlquilerEquiposView;
