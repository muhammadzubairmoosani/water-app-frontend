import React from "react";
import { Layout, CompanyCard, Pagination, Heading } from "../../common/index";
import { data } from "../../../util/companyCardData";
const CompanyList = () => {
  return (
    <div className="company_list_container">
      <Layout>
        <Heading heading="Company List" />
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
