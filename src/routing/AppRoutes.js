import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { DashboardLayout } from "../components";
import { ThemeContext, StoreContext } from "../service/helpers";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(ThemeContext);
  const { state, dispatch } = useContext(StoreContext);

  const [{ data, loading, error }] = useAxios({
    url: "/logged-in",
    method: "GET",
  });

  useEffect(() => {
    if (data) return setUser(data);
    if (error) Notification.error({ message: error.message });
  }, [error, data]);

  


  return (
    <Route
      {...rest}
      render={(props) => {
        switch (rest.path) {
          case "/supplier-dashboard":
          case "/supplier-profile":
            return state?.authInitialState?.isAuthenticated ? (
              <DashboardLayout>
                <Component {...props} />
              </DashboardLayout>
            ) : (
              <Redirect to="/login" />
            );
          case "/login":
          case "/supplier-register":
            return state?.authInitialState?.isAuthenticated ? <Redirect to="/" /> : <Component {...props} />;
          default:
            return <Redirect to="/" />;
        }
      }}
    />
  );
};
