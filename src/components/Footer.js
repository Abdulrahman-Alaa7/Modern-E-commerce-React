import React from "react";
import { Link } from "react-router-dom";
import newsletter from "../images/newsletter.png";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import playStroe from "../images/google.svg";
import appStore from "../images/apple.svg";
import mastercard from "../images/mastercard.svg";
import paypal from "../images/paypal.svg";
import applepay from "../images/apple-pay.svg";
import visa from "../images/visa.svg";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row  align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex align-items-center gap-15">
                <img src={newsletter} alt="newsletter" />
                <h2 className="text-capitalize mb-0">sign up for newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="Email"
                  className="form-control py-1"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text p-2 text-uppercase text-white subscribe "
                  id="basic-addon2"
                >
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <h4 className="mb-4">Contact Us</h4>
              <address className=" information mb-3">
                Demo Store <br />
                No .1259 Freedom New York, 11111 <br />
                United States
                <br />
              </address>
              <a href="tel:+91-987654321" className="text-white mb-3 d-block">
                +91-987654321
              </a>
              <a
                href="mailto:Dev@example.com"
                className="text-white mb-3 d-block"
              >
                Dev@example.com
              </a>

              <div className="social d-flex gap-30">
                <Link to="https://www.facebook.com">
                  <img src={facebook} alt="facebook" />
                </Link>
                <Link to="https://www.instagram.com">
                  <img src={instagram} alt="instagram" />
                </Link>
                <Link to="https://www.twitter.com">
                  <img src={twitter} alt="twitter" />
                </Link>
                <Link to="https://www.linkedin.com">
                  <img src={linkedin} alt="linkedin" />
                </Link>
              </div>
            </div>

            <div className="col-2">
              <h4 className="mb-4">Information</h4>
              <ul className="footer-links d-flex flex-column gap-15">
                <li>
                  <Link to="/privacy-policy" className="text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="text-white">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to="/shipping-policy" className="text-white">
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-service" className="text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-white">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h4 className="mb-4">Account</h4>
              <ul className="footer-links d-flex flex-column gap-15 ">
                <li>
                  <Link className="text-white">Search</Link>
                </li>
                <li>
                  <Link className="text-white">About Us</Link>
                </li>
                <li>
                  <Link className="text-white">Faq</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="text-white">Size Chart</Link>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h4 className="mb-4">Quick Links</h4>
              <ul className="footer-links d-flex flex-column gap-15">
                <li>
                  <Link className="text-white">Accessories</Link>
                </li>
                <li>
                  <Link className="text-white">Laptops</Link>
                </li>
                <li>
                  <Link className="text-white">Headphones</Link>
                </li>
                <li>
                  <Link className="text-white">Smart Watches</Link>
                </li>
                <li>
                  <Link className="text-white">Tablets</Link>
                </li>
              </ul>
            </div>

            <div className="col-3">
              <h4 className="mb-4">Our App</h4>
              <p className="mb-3 text-capitalize">
                Download our app and get extra 15% dicount on your first
                order..!
              </p>
              <div className="d-flex gap-10">
                <Link to="https://play.google.com/">
                  <img src={playStroe} alt="play_store" />
                </Link>
                <Link to="https://www.apple.com/app-store/">
                  <img src={appStore} alt="app_store" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-center mb-0">
                  &copy; {new Date().getFullYear()} Powered by Dev Era.
                </p>
                <div className="pay d-flex gap-10">
                  <Link>
                    <img src={mastercard} alt="mastercard" />
                  </Link>
                  <Link>
                    <img src={paypal} alt="paypal" />
                  </Link>
                  <Link>
                    <img src={visa} alt="visa" />
                  </Link>
                  <Link>
                    <img src={applepay} alt="apple-pay" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
