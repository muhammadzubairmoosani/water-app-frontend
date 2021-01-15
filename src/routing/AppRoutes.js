import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { DashboardLayout } from "../components";
import { ThemeContext } from "../service/helpers";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(ThemeContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        switch (rest.path) {
          case "/supplier-dashboard":
          case "/supplier-profile":
            return user ? (
              <DashboardLayout>
                <Component {...props} />
              </DashboardLayout>
            ) : (
              <Redirect to="/login" />
            );
            break;
          case "/login":
          case "/supplier-register":
            return user ? <Redirect to="/" /> : <Component {...props} />;
            break;
          default:
            return <Redirect to="/" />;
        }
      }}
    />
  );
};
