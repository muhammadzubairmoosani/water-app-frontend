import React from "react";
import { Menu, PageHeader } from "antd";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <PageHeader
        extra={
          <Link to="/" style={{ cursor: "default" }}>
            <img src={require("../../../assets/icons/logo.jpg")} alt="logo" />
          </Link>
        }
        className="site-page-header"
      />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item to="/" key="1">
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/company-list">Companies</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/about-us">About Us</Link>
        </Menu.Item>

        <Menu.Item key="4">
          <Link to="/contact-us">Contact Us</Link>
        </Menu.Item>
      </Menu>
    </header>
  );
};
export default Header;
