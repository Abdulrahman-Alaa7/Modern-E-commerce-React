import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const SignUp = () => {
  return (
    <>
      <Meta title="Sign up" />
      <BreadCrumb title="Sign up" />
      <Container class1="sign-up-wrapper home-wrapper-2  ">
        <div className="sign-up d-flex justify-content-center">
          <div className="sign-up-card">
            <h4 className="text-center mb-3 ">Create Account</h4>
            <form className="form-sign-up mb-3" action="">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="frist"
                  placeholder="First name"
                />
                <label className="label-form text-muted" htmlFor="frist">
                  First name
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="last"
                  placeholder="last name"
                />
                <label className="label-form text-muted" htmlFor="last">
                  Last name
                </label>
              </div>
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
              <div className="buttons-sign-up d-flex justify-content-center">
                <button className="button-small btn-log border-0 mt-2">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
