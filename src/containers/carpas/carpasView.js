import React from "react";
import Carpascontainer from "./carpasContainer";
import CarpasProvider from "./carpasProvider";

const CarpasView = () => (
  <CarpasProvider>
    <Carpascontainer />
  </CarpasProvider>
);

export default CarpasView;
