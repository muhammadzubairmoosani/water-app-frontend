import React from "react";
import MainCarousel from "./carousel";
import NineteenLiter from "./nineteenLiter";
import { Layout } from "../../common/index";

const Home = () => {
  return (
    <div>
      <MainCarousel />
      <Layout>
        <NineteenLiter />
      </Layout>
    </div>
  );
};

export default Home;
