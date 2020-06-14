import React from "react";
import {
  Home,
  Header,
  Footer,
  SupplierList,
  ContactUs,
  BuyerLogin,
  ErrorPage,
  BuyerRegister,
} from "./components/index";
import { BackTop } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <BackTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/buyer-login" component={BuyerLogin} />
        <Route exact path="/buyer-register" component={BuyerRegister} />
        <Route exact path="/supplier-list" component={SupplierList} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
