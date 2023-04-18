import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import cross from "../images/cross.svg";
import smartWatch from "../images/smart-watch-02.jpg";
import watch from "../images/smart-watch.png";
import Container from "../components/Container";

const WishList = () => {
  return (
    <>
      <Meta title="favourite wishlist" />
      <BreadCrumb title="favourite wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className=" wishlist-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute img-fluid close"
              />
              <div className="product-card-image d-flex justify-content-center">
                <img src={smartWatch} alt="watch" className="img-fluid" />
              </div>
              <div className="product-card-info home-wrapper-2 p-3">
                <div className="box-title-price">
                  <h5 className="title-product mb-3">
                    Smart Watch With Advanced Health Monitoring, Fitness
                  </h5>
                  <b className="price d-block">$100.00</b>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className=" wishlist-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute img-fluid close"
              />
              <div className="product-card-image d-flex justify-content-center">
                <img src={watch} alt="watch" className="img-fluid" />
              </div>
              <div className="product-card-info home-wrapper-2 p-3">
                <div className="box-title-price">
                  <h5 className="title-product mb-3">
                    Smart Watch With Advanced Health Monitoring, Fitness
                  </h5>
                  <b className="price d-block">$100.00</b>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className=" wishlist-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute img-fluid close"
              />
              <div className="product-card-image d-flex justify-content-center">
                <img src={watch} alt="watch" className="img-fluid" />
              </div>
              <div className="product-card-info home-wrapper-2 p-3">
                <div className="box-title-price">
                  <h5 className="title-product mb-3">
                    Smart Watch With Advanced Health Monitoring, Fitness
                  </h5>
                  <b className="price d-block">$100.00</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WishList;
