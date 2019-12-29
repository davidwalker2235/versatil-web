import React from "react";
import Servicioscontainer from "./serviciosContainer";
import ServiciosProvider from "./serviciosProvider";

const ServiciosView = () => (
  <ServiciosProvider>
    <Servicioscontainer />
  </ServiciosProvider>
);

export default ServiciosView;
