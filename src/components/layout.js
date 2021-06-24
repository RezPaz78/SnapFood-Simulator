import React from "react";
import Navbar from "./navbar";

const Layout = (props) => {
  return (
    <div className="Layout">
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
