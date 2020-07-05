import React from "react";

const Layout = ({ children, className }) => {
  return <div className={`layout ${className}`}>{children}</div>;
};
export default Layout;
