import React from "react";
import logo from "../../../assets/icons/drops.png";
import avatar from "../../../assets/images/flat-avatar.png";
import { Link } from "react-router-dom";
import { Menu, Avatar } from "antd";
const SubMenu = Menu.SubMenu;

export const DashboardHeader = () => (
  <Menu mode="horizontal" theme="dark" className="dashboard_header">
    <Menu.Item key="brand-logo" className="brand-logo">
      <Link to="/supplier-dashboard">
        <img src={logo} alt="..." className="m-r-5" />
        <span>Pani Vala</span>
      </Link>
    </Menu.Item>
    <SubMenu
      key="profile"
      title={
        <span>
          <Avatar size={24} src={avatar} />
          <span> Profile</span>
        </span>
      }
    >
      <Menu.Item key="profile-view">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <Link to="/">Logout</Link>
      </Menu.Item>
    </SubMenu>
  </Menu>
);
