import React from "react";
import {
  Home,
  Header,
  Footer,
  ContactUs,
  ErrorPage,
  BuyerLogin,
  BuyerRegister,
  SupplierList,
  SupplierLogin,
  SupplierRegister,
  SupplierDetail,
  AdminDashboard,
} from "./components";
import { BackTop } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <BackTop />
      <Header />
      <Switch>
        {/* <Route exact path="/" component={AdminDashboard} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/supplier-list" component={SupplierList} />
        <Route exact path="/supplier-login" component={SupplierLogin} />
        <Route exact path="/supplier-register" component={SupplierRegister} />
        <Route exact path="/buyer-login" component={BuyerLogin} />
        <Route exact path="/buyer-register" component={BuyerRegister} />
        <Route exact path="/supplier-detail/:id" component={SupplierDetail} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
