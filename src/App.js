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
import Profile from "./components/view/Supplier/dashboard/profile";
import { useSelector, useDispatch } from "react-redux";

export const App = () => (
  <Router>
    <BackTop />
    {
      // if user false return this header
      false && <Header />
    }
    <div style={{ paddingTop: true ? null : "75px" }}>
      <Switch>
        <PrivateRoute
          exact
          path="/supplier-dashboard"
          component={SupplierDashboard}
        />
        <PrivateRoute exact path="/supplier-profile" component={Profile} />

        <PrivateRoute exact path="/supplier-login" component={SupplierLogin} />
        <PrivateRoute
          exact
          path="/supplier-register"
          component={SupplierRegister}
        />
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
