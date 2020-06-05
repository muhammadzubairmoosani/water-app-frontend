import React from "react";
import { Menu, PageHeader } from "antd";

const Header = () => {
  return (
    <div className="nav">
      <PageHeader
        extra={<img src={require("../../../assets/icons/logo.png")} alt="logo" />}
        className="site-page-header"
      />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Companies</Menu.Item>
        <Menu.Item key="3">About Us</Menu.Item>
        <Menu.Item key="4">Contact Us</Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
