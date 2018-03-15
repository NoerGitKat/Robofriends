import React from "react";

const Scroll = ({ children }) => {
  const style = {
    overflowY: "scroll",
    border: "1px solid black",
    height: "500px"
  };
  return <div style={style}>{children}</div>;
};

export default Scroll;
