import React from "react";
import "./index.css";
const SecondComponent = React.lazy(() => import("./SecondComponent"));
const FirstComponent = ({ name }) => {
  return (
    <React.Fragment>
      <div style={{ margin: "auto" }} className="main">
        {name}
      </div>
    </React.Fragment>
  );
};
export { FirstComponent, SecondComponent };
