import React from "react";
import "./index.css";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import AdbIcon from "@material-ui/icons/Adb";
const FirstComponent = ({ name }) => {
    return (
        <React.Fragment>
            <div style={{ margin: "auto" }} className="main">
                {name}
                <Typography variant="h1" align="center" color="error">
                    {name}
                </Typography>
                <AdbIcon></AdbIcon>
            </div>
        </React.Fragment>
    );
};
FirstComponent.propTypes = {
    name: PropTypes.string.isRequired,
};
export default FirstComponent;
