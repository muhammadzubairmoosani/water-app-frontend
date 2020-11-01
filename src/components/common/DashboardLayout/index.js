import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DashboardHeader } from "./dashboardHeader";
import { Layout, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  ProfileOutlined,
  MessageOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

const supplierMenuItems = ({ active }) => (
  <Menu theme="light" defaultSelectedKeys={active} mode="vertical">
    <Menu.Item key="1">
      <Link to="/supplier-dashboard">
        <div>
          <DashboardOutlined />
          <span>Dashboard</span>
        </div>
      </Link>
    </Menu.Item>

    <Menu.Item key="2">
      <Link to="/feedback">
        <div>
          <MessageOutlined />
          <span>Feedbacks</span>
        </div>
      </Link>
    </Menu.Item>

    <Menu.Item key="3">
      <Link to="/profile">
        <div>
          <ProfileOutlined />
          <span>Profile</span>
        </div>
      </Link>
    </Menu.Item>
  </Menu>
);

export const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const active = "1";
  return (
    <Layout className="dashboard_layout">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: "#fff" }}
        className="sidebar-left"
      >
        {true ? supplierMenuItems(active) : null}
        <span className="trigger" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </span>
      </Sider>
      <Layout>
        <Header className="headerTop">
          <DashboardHeader />
        </Header>

        <Content
          style={{
            padding: 24,
            minHeight: "100vh",
          }}
          className={collapsed ? "collapsed mainContnet " : "mainContnet"}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
