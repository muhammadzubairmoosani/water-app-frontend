import React from "react";
import { BackTop } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./routing/AppRoutes";
import Profile from "./components/view/Supplier/dashboard/profile";
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

export const App = () => {
  return (
    <Router>
      <BackTop />
      <Header />
      <div style={{ paddingTop: false ? null : "75px" }}>
        <Switch>
          <PrivateRoute
            exact
            path="/supplier-dashboard"
            component={SupplierDashboard}
          />
          <PrivateRoute exact path="/supplier-profile" component={Profile} />

          <PrivateRoute exact path="/login" component={SupplierRegister} />
          {/* <PrivateRoute
            exact
            path="/supplier-register"
            component={SupplierRegister}
          /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/supplier-list" component={SupplierList} />
          <Route exact path="/supplier-detail/:id" component={SupplierDetail} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};
