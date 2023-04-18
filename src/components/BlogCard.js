import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import blog from "../images/blog-1.jpg";
const BlogCard = () => {
  let location = useLocation();
  return (
    <>
      <div
        className={`${
          location.pathname === "/blogs"
            ? "grid-6"
            : "col-lg-3 col-md-6 col-sm-12 py-2"
        }`}
      >
        <div className="box-blog">
          <div className="img-box">
            <img src={blog} alt="blog" className="img-fluid w-100" />
          </div>
          <div className="box-blog-content p-3">
            <span className="text-uppercase">11 June,2023</span>
            <h5>A Beautiful Sunday Morning Renaissance</h5>
            <p>
              You're only as good as your last collection, Which is an enormous
              pressure. I think there is about...
            </p>
            <Link to="/blog/:id" className=" button-small text-uppercase">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
