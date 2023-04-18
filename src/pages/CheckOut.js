import React from "react";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import watch from "../images/smart-watch.png";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Container from "../components/Container";

const CheckOut = () => {
  const navigate = useNavigate();

  const toLink = (event) => {
    event.preventDefault();

    navigate("/information/shipping");
  };

  return (
    <>
      <Meta title="Information" />
      <Container class1="checkout">
        <div className="check-data-left bg-white">
          <div className="row">
            <div className="col-7 inform-contact py-5">
              {/* <h2 className="mb-3">Dev Era.</h2> */}

              <nav aria-label="breadcrumb mb-3">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item " aria-current="page">
                    <Link to="/cart" className="text-muted ">
                      Cart
                    </Link>
                  </li>
                  <li className="breadcrumb-item ">
                    <Link className="text-muted active" to="/information">
                      Information
                    </Link>
                  </li>
                  <li className="breadcrumb-item ">
                    <Link className="text-muted no" to="">
                      Shipping
                    </Link>
                  </li>
                  <li className="breadcrumb-item ">
                    <Link className="text-muted no" to="#">
                      Payment
                    </Link>
                  </li>
                </ol>
              </nav>

              <div className="contact-inform mb-4">
                <h5 className="mb-2 ">Contact Information</h5>
                <p className="mb-2">
                  <span className="name me-1">Emma</span>
                  <span className=" name  me-1">World</span>
                  <span className=" name  me-1">(Emma@email.com)</span>
                </p>
                <div className="form-check check-box mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="default"
                  />
                  <label
                    className="form-check-label text-muted "
                    htmlFor="default"
                  >
                    Email me with news and offers
                  </label>
                </div>
              </div>

              <div className="form-shipping">
                <h5 className="mb-2 ">Shipping Address</h5>
                <form onSubmit={toLink} action="" className="shipping-info">
                  <div className="form-floating selecting mb-3">
                    <select
                      className="form-select input"
                      id="Select1"
                      aria-label="Floating label select example"
                    >
                      <option defaultValue>United States (New York)</option>
                    </select>
                    <label htmlFor="Select1">Saved Address</label>
                  </div>

                  <div className="form-floating selecting mb-3">
                    <select
                      className="form-select input"
                      id="Select2"
                      aria-label="Floating label select example"
                      required
                    >
                      <option defaultValue>United States</option>
                      <option value="4">United Arab Emirates</option>
                      <option value="2">United Kingdom</option>
                      <option value="3">France</option>
                    </select>
                    <label htmlFor="Select2">Country / Region</label>
                  </div>

                  <div className="row g-2 mb-3">
                    <div className="col-md">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control input"
                          id="Input1"
                          placeholder="First Name"
                        />
                        <label htmlFor="Input1" className="text-muted fs-14">
                          First Name (optional)
                        </label>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control input"
                          id="Input2"
                          placeholder="Last Name"
                          required
                        />
                        <label htmlFor="Input2" className="text-muted fs-14">
                          Last Name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-floating mb-3  ">
                    <input
                      type="text"
                      className="form-control input"
                      id="Input3"
                      placeholder="Address"
                      required
                    />
                    <label htmlFor="Input3" className="fs-14 text-muted">
                      Address
                    </label>
                  </div>

                  <div className="form-floating mb-3  ">
                    <input
                      type="text"
                      className="form-control input"
                      id="Input4"
                      placeholder="Apartment , Suite, etc. (optoinal)"
                    />
                    <label htmlFor="Input4" className="fs-14 text-muted">
                      Apartment, Suite, etc. (optoinal)
                    </label>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-4">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control input"
                          id="Input5"
                          placeholder="City"
                          required
                        />
                        <label htmlFor="Input5" className="text-muted fs-14">
                          City
                        </label>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-floating selecting ">
                        <select
                          className="form-select input"
                          id="Select3"
                          aria-label="Floating label select example"
                          required
                        >
                          <option value="1">New York</option>
                          <option value="4">State2</option>
                          <option value="5">State3</option>
                          <option value="3">State4</option>
                        </select>
                        <label htmlFor="Select3">State</label>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control input"
                          id="Input6"
                          placeholder="Zip code"
                          required
                        />
                        <label htmlFor="Input6" className="text-muted fs-14">
                          ZIP code
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="box-shipping-btn d-flex justify-content-between align-items-center">
                    <Link
                      to="/cart"
                      className="back d-flex align-items-center   py-4 "
                    >
                      <IoIosArrowBack className="left-arrow text-dark" />
                      <span className="text-dark mx-1">Return to cart</span>
                    </Link>
                    <div className="continue">
                      <button
                        type="submit"
                        className="button-small border-0 fs-16 bg-danger"
                      >
                        Continue to shipping
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5 inform-product home-wrapper-2 py-5 px-4">
              <div className="product-info-image d-flex gap-15 align-items-center pb-4">
                <div className="image position-relative">
                  <img src={watch} alt="watch" className="img " />
                  <span className="quan position-absolute">1</span>
                </div>
                <div className="info d-flex justify-content-between align-items-center">
                  <div className="info-prod">
                    <h5 className=" fs-16 lh-base mb-1">
                      Smart Watch With Advanced Health Monitoring, Fitness.
                    </h5>
                    <p className="mb-0 text-muted fs-14">S / #A85A5A</p>
                  </div>
                  <div className="info-price">
                    <span className="price">$100.00</span>
                  </div>
                </div>
              </div>

              <div className="product-total py-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="fw-400 text-muted fs-16 mb-0">Subtotal</h6>
                  <span className="fw-400">$100.00</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="fw-400 text-muted fs-16 mb-0">Shipping</h6>
                  <span className="fw-400 text-muted fs-14">
                    Calculated at next step
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="fw-400 text-muted fs-16 mb-0">
                      Estimated taxes
                    </h6>
                    <BsFillQuestionCircleFill className="icon text-muted" />
                  </div>
                  <span className="fw-400">$18.00</span>
                </div>
              </div>

              <div className="product-total-2 py-4">
                <div className="d-flex justify-content-between align-items-baseline mb-2">
                  <h6 className="fw-400 fs-22 mb-0">Total</h6>
                  <div className="d-flex gap-15 align-items-baseline">
                    <span className="dollar fs-14 text-muted">USD</span>
                    <span className="total">$118.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CheckOut;
