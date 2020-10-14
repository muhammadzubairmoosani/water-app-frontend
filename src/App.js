import React from "react";
import {
  Home,
  Header,
  Footer,
  ContactUs,
  ErrorPage,
  SupplierList,
  SupplierLogin,
  SupplierRegister,
  SupplierDetail,
  SupplierDashboard,
} from "./components";
import { BackTop } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { PrivateRoute } from "./routing/AppRoutes";

export const App = () => {
  return (
    <Router>
      <BackTop />
      <Header />
      <Switch>
        <PrivateRoute exact path="/dashboard" component={SupplierDashboard} />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/supplier-list" component={SupplierList} />
        <PrivateRoute exact path="/supplier-login" component={SupplierLogin} />
        <PrivateRoute
          exact
          path="/supplier-register"
          component={SupplierRegister}
        />
        <Route exact path="/supplier-detail/:id" component={SupplierDetail} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
};
