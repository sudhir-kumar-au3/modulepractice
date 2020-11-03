import React from "react";

const FirstComponent = ({ name }) => {
  return (
    <React.Fragment>
      <div style={{ margin: "auto" }}>{name}</div>
    </React.Fragment>
  );
};
export default FirstComponent;
