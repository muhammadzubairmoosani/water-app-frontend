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
        <WallCard heading="Pani Vala">
          <div className="list_wrapper">
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
              <li className="title">Supplier</li>
              <li>
                <Link to="/supplier-login">Login</Link>
              </li>
              <li>
                <Link to="/supplier-register">Register</Link>
              </li>
            </ul>
          </div>
        </WallCard>
      </div>
      <div className="copyright_contian">
        <p className="copyright_text">{`© Copyright ${year} by panivala.com`}</p>
      </div>
    </footer>
  );
};
export default Footer;
