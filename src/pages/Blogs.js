import React from "react";
import BlogCard from "../components/BlogCard";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import NumberPages from "../components/NumberPages";
import ShopCategories from "../components/ShopCategories";
import Container from "../components/Container";

const Blogs = () => {
  return (
    <>
      <Meta title="blogs" />
      <BreadCrumb title="blogs" />
      <Container class1="blogs home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <ShopCategories />
          </div>
          <div className="col-9 ">
            <div className="blogs-content blog-wrapper d-flex flex-wrap gap-10 justify-content-center mb-3">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
            <NumberPages />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blogs;
