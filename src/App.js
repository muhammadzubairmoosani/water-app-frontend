import React from "react";
import { Home, Header, Footer, CompanyList,ContactUs } from "./components/index";
import { BackTop } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <BackTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/company-list" component={CompanyList} />
        <Route exact path="/contact-us" component={ContactUs} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
