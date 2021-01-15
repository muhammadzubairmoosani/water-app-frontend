import React, { useContext } from "react";
import { Menu, PageHeader } from "antd";
import { Link } from "react-router-dom";
import { Notification } from "../";
import { ThemeContext } from "../../../service/helpers";
import useAxios from "axios-hooks";

const Header = () => {
  const { user, setUser } = useContext(ThemeContext);

  const [{}, logOut] = useAxios(
    { url: "/logout", method: "GET" },
    { manual: true }
  );

  const _onLogOut = () => {
    debugger;
    logOut()
      .then(() => setUser(null))
      .catch((error) =>
        Notification.error({ message: error?.response?.data?.message })
      );
  };

  return (
    <header className="_header">
      <PageHeader
        extra={
          <Link to="/">
            <img
              src={require("../../../assets/icons/rsz_logo-removebg-preview.png")}
              alt="logo"
            />
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
          <Menu.Item key="5" onClick={_onLogOut}>
            <Link to="/">Sign out</Link>
          </Menu.Item>
        )}
      </Menu>
    </header>
  );
};
export default Header;
