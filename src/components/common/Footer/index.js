import React, { useState, useEffect, useContext } from "react";
import { WallCard } from "../";
import { Link } from "react-router-dom";
import { Layout } from "../index";
import { Row, Col } from "antd";
import { ThemeContext } from "../../../service/helpers";

export const Footer = () => {
  const [year, setYear] = useState(0);
  const { user } = useContext(ThemeContext);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, [year]);

  return (
    <footer>
      <Layout>
        <WallCard heading="Pani Vala">
          <Row>
            <Col xs={24} sm={12} lg={6}>
              <ul>
                <li className="title">Contact Info</li>
                <li>
                  <span>Location...</span>
                </li>
                <li>
                  <span>+92 315 0000000</span>
                </li>
                <li>
                  <a href="mailto:info.panivala@gmail.com">
                    info.panivala@gmail.com
                  </a>
                </li>
              </ul>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <ul>
                <li className="title">Pani Vala's</li>
                <li>
                  <a href="/#about_us">About Us</a>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">Advertise on Panivala</Link>
                </li>
                <li>
                  <Link to="#">Terms of Use</Link>
                </li>
                <li>
                  <Link to="#">Help and Support</Link>
                </li>
              </ul>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <ul>
                <li className="title">Connect with Us</li>
                <li>
                  <Link to="#">Facebook</Link>
                </li>
                <li>
                  <Link to="#">Linked-In</Link>
                </li>
                <li>
                  <Link to="#">Twitter</Link>
                </li>
              </ul>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <ul>
                <li className="title">Let's Start</li>
                {!user && (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}
                {/* <li>
                   <Link to="/supplier-register">Register</Link>
                </li> */}
              </ul>
            </Col>
          </Row>
        </WallCard>
      </Layout>
      <p className="copyright">{`© Copyright ${year} by panivala.com`}</p>
    </footer>
  );
};
