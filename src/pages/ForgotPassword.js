import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <BreadCrumb title="Forgot Password" />
      <Container class1="foget-wrapper home-wrapper-2  ">
        <div className="forget-wrapper d-flex justify-content-center">
          <div className="forget-card">
            <h3 className="text-center mb-3 ">Reset Your Password</h3>
            <p className="mb-3 text-muted text-center desc-forget">
              We will send you an email to reset your password
            </p>
            <form className="form-forget" action="">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
                <label className="label-form text-muted" htmlFor="email">
                  Email
                </label>
              </div>

              <div className="buttons-forget d-flex justify-content-center align-items-center gap-10 flex-column pt-2">
                <button type="submit" className="button-small btn-log border-0">
                  Submit
                </button>
                <Link to="/login" className="cance p-2 text-dark rounded-3">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPassword;
