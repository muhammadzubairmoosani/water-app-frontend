import React from "react";
import { Redirect, Route } from "react-router-dom";
import { DashboardLayout } from "../components";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      switch (rest.path) {
        case "/supplier-dashboard":
          return true ? (
            <DashboardLayout>
              <Component {...props} />
            </DashboardLayout>
          ) : (
            <Redirect to="/supplier-login" />
          );
          break;
        case "/supplier-login":
        case "/supplier-register":
          return localStorage.getItem("user_token") ? (
            <Redirect to="/" />
          ) : (
            <Component {...props} />
          );
          break;
        default:
          return <Redirect to="/" />;
      }
    }}
  />
);
