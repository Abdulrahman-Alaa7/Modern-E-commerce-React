import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const ResetPassword = () => {
  return (
    <>
      <Meta title="Reset password" />
      <BreadCrumb title="Reset password" />
      <Container class1="sign-up-wrapper home-wrapper-2  ">
        <div className="sign-up d-flex justify-content-center">
          <div className="sign-up-card">
            <h4 className="text-center mb-3 ">Reset Password</h4>
            <form className="form-sign-up mb-3" action="">
              <div className="form-floating mb-2">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                <label className="label-form text-muted" htmlFor="password">
                  Password
                </label>
              </div>
              <div className="form-floating mb-2">
                <input
                  type="password"
                  className="form-control"
                  id="new-password"
                  placeholder="New-password"
                />
                <label className="label-form text-muted" htmlFor="new-password">
                  Confirm password
                </label>
              </div>
              <div className="buttons-sign-up d-flex justify-content-center">
                <button className="button-small btn-log border-0 mt-2">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;
