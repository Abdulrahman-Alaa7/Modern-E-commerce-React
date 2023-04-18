import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { FaHome, FaPhoneAlt, FaInfo } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title="contact" />
      <BreadCrumb title="contact" />
      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 map mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28776.674269264833!2d-74.02256636035136!3d40.70094659140764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1680112184201!5m2!1sen!2seg"
              style={{ height: "450px", width: "100%" }}
              className="border-0  "
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="col-12 content ">
            <div className="contact-content d-flex justify-content-between  gap-10">
              <div className="info-box-1">
                <h4 className="pb-2">Contact</h4>
                <form action="" className="form p-2">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                    />
                    <label className="label text-muted" htmlFor="name">
                      Name
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                    <label className="label text-muted" htmlFor="email">
                      Email
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Phone Number"
                    />
                    <label className="label text-muted" htmlFor="phone">
                      Phone Number
                    </label>
                  </div>
                  <div className="form-floating comment mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="textarea2"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label className="label text-muted" htmlFor="textarea2">
                      Comment
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="button-small mb-3 contact border-0"
                  >
                    Send
                  </button>
                </form>
              </div>
              <div className="info-box-2">
                <h4 className="pb-2">Get In Touch With Us </h4>
                <ul className="info-contact p-2">
                  <li className="info-1 mb-4 d-flex gap-10 align-items-center">
                    <FaHome className="icon text-muted home" />
                    <address className="txt-info mb-0 text-muted">
                      33 New Montagomery St. Ste 750 San Francisco. CA, USA
                      96104
                    </address>
                  </li>
                  <li className="info-1 mb-4 d-flex gap-10 align-items-center">
                    <FaPhoneAlt className="icon text-muted phone-icon" />
                    <a
                      href="tel:+91-987654321"
                      className="text-muted mb-0 txt-info phone"
                    >
                      +91-987654321
                    </a>
                  </li>
                  <li className="info-1 mb-4 d-flex gap-10 align-items-center">
                    <MdEmail className="icon text-muted" />
                    <a
                      href="mailto:Dev@example.com"
                      className="text-muted mb-0 txt-info"
                    >
                      Dev@example.com
                    </a>
                  </li>
                  <li className="info-1 mb-4 d-flex gap-10 align-items-center">
                    <FaInfo className="icon text-muted" />
                    <p className="txt-info mb-0 text-muted">
                      Monday - Friday 10 Am - 8 PM
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
