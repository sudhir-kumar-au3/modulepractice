import { Paper } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import "./seconcomponent.css";
function SecondComponent({ title }) {
  return <Paper className="hello">I am second component {title}</Paper>;
}
SecondComponent.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SecondComponent;
