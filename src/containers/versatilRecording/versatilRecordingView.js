import React from "react";
import VersatilRecordingcontainer from "./versatilRecordingContainer";
import VersatilRecordingProvider from "./versatilRecordingProvider";

const VersatilRecordingView = () => (
  <VersatilRecordingProvider>
    <VersatilRecordingcontainer />
  </VersatilRecordingProvider>
);

export default VersatilRecordingView;
