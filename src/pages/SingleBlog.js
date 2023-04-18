import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ShopCategories from "../components/ShopCategories";
import {
  BsArrowLeft,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title="A Beautiful Sunday Morning Renaissance" />
      <BreadCrumb title="A Beautiful Sunday Morning Renaissance" />
      <Container class1="read-more home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <ShopCategories />
          </div>
          <div className="col-9">
            <h2 className="mb-3">A Beautiful Sunday Morning Renaissance</h2>
            <div className="image ">
              <img src={blog} alt="blog" className="img-fluid w-100" />
            </div>
            <div className="info-para">
              <p className="my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                culpa neque eos quaerat minus enim harum maxime nostrum itaque,
                quibusdam provident laboriosam voluptas perspiciatis quod esse
                error magni suscipit? Adipisci numquam soluta minus non! Rem
                doloremque ad quaerat ipsum recusandae.
              </p>
            </div>
            <div className="date d-flex align-items-center gap-30 mb-4">
              <span className="parent">
                <span>11</span>
                <span className="mx-1">Jun,</span>
                <span>2023</span>
              </span>
              <span className="write ">Emma Adam</span>
            </div>
            <div className="back-social d-flex justify-content-between align-items-center mb-4">
              <Link
                to="/blogs"
                className="back d-flex align-items-center gap-10  py-4 "
              >
                <BsArrowLeft className="left-arrow text-dark" />
                <span className="text-muted">Back to blog</span>
              </Link>
              <div className="social d-flex gap-30 align-items-center ">
                <Link to="https://facebook.com" className="text-dark ">
                  <BsFacebook className="icon" />
                </Link>
                <Link to="https://instagram.com" className="text-dark">
                  <BsInstagram className="icon" />
                </Link>
                <Link to="https://twitter.com" className="text-dark">
                  <BsTwitter className="icon" />
                </Link>
              </div>
            </div>
            <div className="info-comment">
              <h5 className="text-muted mb-3">Leave A Comment </h5>
              <form action="" className="form-comment">
                <div className="name-email d-flex flex-wrap gap-10 ">
                  <div className="form-floating mb-3 name">
                    <input
                      type="text"
                      className="form-control"
                      id="name-01"
                      placeholder="Name"
                    />
                    <label className="text-muted" htmlFor="name-01">
                      Name
                    </label>
                  </div>
                  <div className="form-floating mb-3 name">
                    <input
                      type="email"
                      className="form-control"
                      id="name-02"
                      placeholder="Email"
                    />
                    <label className="text-muted" htmlFor="name-02">
                      Email
                    </label>
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                  <label className="text-muted" htmlFor="floatingTextarea">
                    Comment
                  </label>
                </div>
                <button
                  type="submit"
                  className="button-small border-0 comment my-2"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
