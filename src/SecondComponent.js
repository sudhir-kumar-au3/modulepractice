import { Paper } from "@material-ui/core";
import React from "react";
import "./seconcomponent.css";
function SecondComponent({ title }) {
  return <Paper className="hello">I am second component {title}</Paper>;
}

export default SecondComponent;
