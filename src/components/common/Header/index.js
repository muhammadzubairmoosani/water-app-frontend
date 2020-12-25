import React, { useState, useEffect } from "react";
import { Menu, PageHeader, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../../store/actions";
import { PopOver } from "../";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
const Header = () => {
  const { isLoggedIn, user } = useSelector(({ authReducer }) => authReducer);
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(null);

  const { SubMenu } = Menu;

  useEffect(() => {
    console.log(user);
    // dispatch(authAction.isLoggedIn());
  }, [user]);

  useEffect(() => {
    setLoggedIn(isLoggedIn);
    console.log(isLoggedIn);
  }, [isLoggedIn]);

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

        {/* {loggedIn && (
          <Menu.Item>
            <a
              onClick={() => {
                localStorage.removeItem("user_token");
                setLoggedIn(null);
              }}
            >
              log-out
            </a>
          </Menu.Item>
        )} */}

        <Menu.Item onClick={()=>{}} key="5">
          <PopOver
            // hover
            title={user?.name || "user name"}
            content={
              <>
                <Menu.Item>3rd menu item</Menu.Item>
                <Menu.Item>4th menu item</Menu.Item>
              </>
              // <>
              //   <Link to="/dashboard">Profile</Link>
              //   <br />
              //   <Link>Sign out</Link>
              // </>
            }
          >
            <UserOutlined />
          </PopOver>
        </Menu.Item>
      </Menu>
    </header>
  );
};
export default Header;

// {/* <SubMenu title="sub menu">
// {/* <Menu.Item key="5"> */}
//   <PopOver
//     // hover
//     title={user?.name || "user name"}
//     content={
//       <>
//         <Menu.Item>3rd menu item</Menu.Item>
//         <Menu.Item>4th menu item</Menu.Item>
//         </>
//         // <>
//         //   <Link to="/dashboard">Profile</Link>
//         //   <br />
//         //   <Link>Sign out</Link>
//         // </>
//       }
//       >
//     <UserOutlined />
//   </PopOver>
//       </SubMenu> */}
