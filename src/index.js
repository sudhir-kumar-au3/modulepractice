import React from "react";
import "./index.css";
import { Typography } from "@material-ui/core";
import SecondComponent from "./SecondComponent";
const FirstComponent = ({ name }) => {
  return (
    <React.Fragment>
      <div style={{ margin: "auto" }} className="main">
        {name}
        <Typography variant="h1" align="center" color="error">
          {name}
        </Typography>
      </div>
    </React.Fragment>
  );
};
export { FirstComponent, SecondComponent };
