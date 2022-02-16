import React from "react";
import NavBar from "./nav";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="mb-4"></div>
      <div className="container">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
