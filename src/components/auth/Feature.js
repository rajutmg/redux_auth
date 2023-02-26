import React from "react";
import requireAuth from "../requireAuth";

const Feature = () => {
  return <div>This is feature Components</div>;
};

export default requireAuth(Feature);
