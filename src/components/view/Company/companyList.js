import React from "react";
import { Banner, Layout, CompanyCard, Pagination } from "../../common/index";
import { data } from "../../../util/companyCardData";
const CompanyList = () => {
  return (
    <div className="company_list_container">
      <Banner heading="Companies List" subHeading="The Smart Choise" />
      <Layout>
        {data.map((item) => (
          <div key={item._id}>
            <CompanyCard props={item} />
          </div>
        ))}
        <Pagination props="50" />
      </Layout>
    </div>
  );
};
export default CompanyList;
