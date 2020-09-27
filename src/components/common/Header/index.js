import React from "react";
import { Menu, PageHeader } from "antd";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

const Header = () => (
  <header className="_header">
    <PageHeader
      extra={
        <Link to="/">
          <img src={require("../../../assets/icons/logo.jpg")} alt="logo" />
        </Link>
      }
      className="site-page-header"
    />
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>

      <Menu.Item key="2">
        <Link to="/supplier-list">Suppliers</Link>
      </Menu.Item>

      <Menu.Item key="4">
        <Link to="/contact-us">Contact Us</Link>
      </Menu.Item>
    </Menu>
  </header>
);
export default Header;
