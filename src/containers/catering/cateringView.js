import React from "react";
import Cateringcontainer from "./cateringContainer";
import CateringProvider from "./cateringProvider";

const CateringView = () => (
  <CateringProvider>
    <Cateringcontainer />
  </CateringProvider>
);

export default CateringView;
