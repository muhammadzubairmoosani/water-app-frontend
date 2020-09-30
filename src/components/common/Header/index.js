import React, { useState, useEffect } from "react";
import { Menu, PageHeader } from "antd";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

const Header = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("user_token");
    token ? setUser(true) : setUser(null);
  }, []);
  return (
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
        {user && (
          <Menu.Item>
            <a
              onClick={() => {
                localStorage.removeItem("user_token");
                setUser(null);
              }}
            >
              log-out
            </a>
          </Menu.Item>
        )}
      </Menu>
    </header>
  );
};
export default Header;
