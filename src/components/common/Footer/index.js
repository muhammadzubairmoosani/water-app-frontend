import React, { useState, useEffect } from "react";
import { WallCard } from "../";
import { Link } from "react-router-dom";

const Footer = () => {
  const [year, setYear] = useState(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, [year]);

  return (
    <footer>
      <div className="footer_nest_contain">
        <WallCard heading="footer" subHeading="sub heading">
          <div className="list_wrapper">
            <ul>
              <li className="title">Supplier Detail</li>
              <li>
                <span>Supplier Address</span>
              </li>
              <li>
                <span>+92 315 0000000</span>
              </li>
              <li>
                <span>paniwala@gmail.com</span>
              </li>
            </ul>
            <ul>
              <li className="title">Pani Wala's</li>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Advertise on Paniwala</Link>
              </li>
              <li>
                <Link to="#">Terms of Use</Link>
              </li>
              <li>
                <Link to="#">Help and Support</Link>
              </li>
            </ul>
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
            <ul>
              <li className="title">Buyer</li>
              <li>
                <Link to="/buyer-login">Login</Link>
              </li>
              <li>
                <Link to="#">Sign-up</Link>
              </li>
            </ul>
            <ul>
              <li className="title">Supplier</li>
              <li>
                <Link to="#">Login</Link>
              </li>
              <li>
                <Link to="#">Register</Link>
              </li>
            </ul>
          </div>
        </WallCard>
      </div>
      <div className="copyright_contian">
        <p className="copyright_text">{`© Copyright ${year} by paniwala.com`}</p>
      </div>
    </footer>
  );
};
export default Footer;
