import React, { Fragment } from "react";
import { Home, Header, Footer, CompanyList } from "./components/index";
import { BackTop } from "antd";
const App = () => {
  return (
    <Fragment>
      <BackTop />
      <Header />
      <Home />
      {/* <CompanyList /> */}
      <Footer />
    </Fragment>
  );
};
export default App;
