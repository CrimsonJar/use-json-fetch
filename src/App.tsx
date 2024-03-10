import React from "react";
// import useJsonFetch from "./Components/useJsonFetch";
import Component from "./Components/Component";

const App = () => {
  return (
    <div>
      <Component endpoint={"data"} />
      <Component endpoint={"error"} />
      <Component endpoint={"loading"} />
    </div>
  );
};

export default App;
