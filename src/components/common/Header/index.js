import React from "react";
import { Menu, PageHeader } from "antd";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;

const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

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
        <SubMenu key="5" title="Login" icon={<DownOutlined />}>
          <Menu.Item key="setting:1">Buyer</Menu.Item>
          <Menu.Item key="setting:2">Supplier</Menu.Item>
        </SubMenu>
      </Menu>
    </header>
  );
};
export default Header;
