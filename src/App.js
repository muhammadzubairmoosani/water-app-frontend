import React, { Fragment } from "react";
import { Home } from "./components/index";
import { Header, Footer } from "./components/common/index";
import { BackTop } from "antd";
const App = () => {
  return (
    <Fragment>
      <BackTop visibilityHeight="800" />
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
};
export default App;
