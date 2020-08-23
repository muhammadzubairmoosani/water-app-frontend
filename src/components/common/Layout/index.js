import React from "react";

const Layout = ({ children, className }) => (
  <div className={`layout ${className}`}>{children}</div>
);
export default Layout;
