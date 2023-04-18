import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import watch from "../images/smart-watch.png";
import { TbLetterB } from "react-icons/tb";
import { FaLock } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Container from "../components/Container";

const Payment = () => {
  return (
    <>
      <Meta title="payment" />
      <Container class1="checkout payment ">
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
                    <Link className="text-muted " to="/information">
                      Information
                    </Link>
                  </li>
                  <li className="breadcrumb-item ">
                    <Link className="text-muted " to="/information/shipping">
                      Shipping
                    </Link>
                  </li>
                  <li className="breadcrumb-item ">
                    <Link
                      className="text-muted active"
                      to="/information/shipping/payment"
                    >
                      Payment
                    </Link>
                  </li>
                </ol>
              </nav>

              <div className="inform-shipping mb-4">
                <div className="box-shipping">
                  <div className="info-shipping d-flex justify-content-between align-items-center p-3">
                    <div className="d-flex gap-30 align-items-baseline">
                      <h6 className="fs-16 text-muted fw-400 mb-0">Contact</h6>
                      <p className="fs-16 text-muted fw-400 mb-0">
                        emma@email.com
                      </p>
                    </div>
                    <button className="text-dark border-0 bg-white">
                      Change
                    </button>
                  </div>
                  <div className="info-shipping d-flex justify-content-between align-items-center p-3">
                    <div className="d-flex gap-30 align-items-baseline">
                      <h6 className="fs-16 text-muted fw-400 mb-0">Ship to</h6>
                      <p className="fs-16 text-muted fw-400 mb-0">
                        ghfdgh, hfghfg, hgfh IN 46305, United States
                      </p>
                    </div>
                    <button className="text-dark border-0 bg-white">
                      Change
                    </button>
                  </div>
                  <div className=" info-shipping  d-flex gap-30 align-items-baseline p-3">
                    <h6 className="fs-16 text-muted fw-400 mb-0">Method</h6>
                    <p className="fs-16 text-muted fw-400 mb-0">
                      Standard - <span className="text-dark">$19.65</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="form-shipping">
                <h5 className="mb-2 "> Payment </h5>
                <p className="mb-3 text-muted fs-14 ">
                  All transactions are secure and encrypted
                </p>
                <form action="" className="shipping-info">
                  <div className="box-shipping py-3 mb-3 home-wrapper-2">
                    <div className="credit-card d-flex justify-content-between align-items-center px-3 pb-3">
                      <h6 className="mb-0 fs-18 ">Credit card</h6>
                      <TbLetterB className="b-icon py-1" />
                    </div>
                    <div className="credit-info pt-3">
                      <div className="inputs-credit px-4">
                        <div className="card-number position-relative mb-3">
                          <FaLock className="position-absolute lock-icon text-muted" />
                          <input
                            type="tel"
                            inputMode="numeric"
                            pattern="[0-9\s]{13,19}"
                            autoComplete="cc-number"
                            maxLength="19"
                            className="input w-100 p-2"
                            placeholder="Card number"
                            required
                          />
                        </div>

                        <div className="card-number position-relative mb-3">
                          <input
                            type="text"
                            className="input w-100 p-2"
                            placeholder="Cardholder name"
                            required
                          />
                        </div>

                        <div className="row ">
                          <div className="col">
                            <input
                              type="text"
                              className="input p-2 w-100"
                              placeholder="Expiration date (MM/YY)"
                              required
                            />
                          </div>
                          <div className="col position-relative">
                            <BsFillQuestionCircleFill className="position-absolute ques-icon text-muted" />
                            <input
                              type="password"
                              className=" input p-2 w-100"
                              placeholder="Security code"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h5 className="mb-2 "> Billing Address </h5>
                  <p className="mb-3 text-muted fs-14 ">
                    Select the address that matches your card or payment method
                  </p>
                  <div className="box-shipping">
                    <div className="info-shipping  p-3">
                      <div className="form-check pb-3 address">
                        <input
                          className="form-check-input "
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Same as shipping address
                        </label>
                      </div>
                      <div className="form-check pt-3 address ">
                        <input
                          className="form-check-input "
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          Use a different billing address
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="box-shipping-btn d-flex justify-content-between align-items-center mt-2">
                    <Link
                      to="/information/shipping"
                      className="back d-flex align-items-center   py-4 "
                    >
                      <IoIosArrowBack className="left-arrow text-dark" />
                      <span className="text-dark mx-1">Return to shipping</span>
                    </Link>
                    <div className="continue">
                      <button
                        type="submit"
                        className="button-small border-0 fs-16 bg-danger pay"
                      >
                        Pay now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-5 inform-product home-wrapper-2 py-5 px-4">
              <div className="product-info-image d-flex gap-15 align-items-center pb-4">
                <div className="image position-relative">
                  <span className="quan position-absolute">1</span>
                  <img src={watch} alt="watch" className="img " />
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
                <div className="d-flex justify-content-between align-items-center ">
                  <h6 className="fw-400 text-muted fs-16 mb-0">Shipping</h6>
                  <span className="fw-400">$19.65</span>
                </div>
              </div>

              <div className="product-total-2 py-4">
                <div className="d-flex justify-content-between align-items-baseline mb-2">
                  <h6 className="fw-400 fs-22 mb-0">Total</h6>
                  <div className="d-flex gap-15 align-items-baseline">
                    <span className="dollar fs-14 text-muted">USD</span>
                    <span className="total">$119.65</span>
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

export default Payment;
