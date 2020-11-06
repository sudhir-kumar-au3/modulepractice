import React from "react";
import "./index.css";
import { Typography } from "@material-ui/core";
const SecondComponent = React.lazy(() => import("./SecondComponent"));
const FirstComponent = ({ name }) => {
  return (
    <React.Fragment>
      <div style={{ margin: "auto" }} className="main">
        {name}
        <Typography variant="h1" align="center">
          {name}
        </Typography>
      </div>
    </React.Fragment>
  );
};
export { FirstComponent, SecondComponent };
