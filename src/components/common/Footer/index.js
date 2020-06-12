import React, { useState, useEffect } from "react";
import { WallCard } from "../index";
import { Link } from "react-router-dom";

const Footer = () => {
  const [year, setYear] = useState(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, [year]);

  return (
    <footer>
      <div className="back_shadow"></div>
      <div className="footer_nest_contain">
        <WallCard heading="footer" subHeading="sub heading">
          <div className="list_wrapper">
            <ul>
              <li className="title">Company Detail</li>
              <li>
                <Link>Address</Link>
              </li>
              <li>
                <Link>Number</Link>
              </li>
              <li>
                <Link>Email Address</Link>
              </li>
            </ul>
            <ul>
              <li className="title">Pani Wala's</li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link to="contact-us">Contact Us</Link>
              </li>
              <li>
                <Link>Advertise on Paniwala</Link>
              </li>
              <li>
                <Link>Terms of Use</Link>
              </li>
              <li>
                <Link>Help and Support</Link>
              </li>
            </ul>
            <ul>
              <li className="title">Connect with Us</li>
              <li>
                <Link>Facebook</Link>
              </li>
              <li>
                <Link>Linked-In</Link>
              </li>
              <li>
                <Link>Twitter</Link>
              </li>
            </ul>
            <ul>
              <li className="title">Buyer</li>
              <li>
                <Link to="/buyer-login">Login</Link>
              </li>
              <li>
                <Link>Sign-up</Link>
              </li>
            </ul>
            <ul>
              <li className="title">Supplier</li>
              <li>
                <Link>Login</Link>
              </li>
              <li>
                <Link>Register</Link>
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
