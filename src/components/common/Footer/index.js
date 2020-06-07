import React, { useState, useEffect } from "react";
import { WallCard } from "../index";

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
                <li>Address</li>
                <li>Number</li>
                <li>Email Address</li>
              </ul>
              <ul>
                <li className="title">Pani Wala's</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Advertise on Paniwala</li>
                <li>Terms of Use</li>
                <li>Help and Support</li>
              </ul>
              <ul>
                <li className="title">Connect with Us</li>
                <li>Facebook</li>
                <li>Linked-In</li>
                <li>Twitter</li>
              </ul>
              <ul>
                <li className="title">Buyer</li>
                <li>Login</li>
                <li>Sign-up</li>
              </ul>
              <ul>
                <li className="title">Supplier</li>
                <li>Login</li>
                <li>Register</li>
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
