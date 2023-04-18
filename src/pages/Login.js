import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Login = () => {
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper home-wrapper-2  ">
        <div className="login d-flex justify-content-center">
          <div className="login-card">
            <h4 className="text-center mb-3 ">Login</h4>
            <form className="form-login mb-3" action="">
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
              <Link
                to="/forgot-password"
                className="forget-password text-dark mb-3"
              >
                Forgotten password?
              </Link>
              <div className="buttons-login d-flex justify-content-center gap-10 py-2">
                <button type="submit" className="button-small btn-log border-0">
                  Login
                </button>
                <Link to="/sign-up" className="button-small btn-log yellow">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
