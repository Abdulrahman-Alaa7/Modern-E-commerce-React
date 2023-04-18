import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import cross from "../images/cross.svg";
import watch from "../images/smart-watch.png";
import Container from "../components/Container";

const CompareProducts = () => {
  return (
    <>
      <Meta title="compare products" />
      <BreadCrumb title="compare products" />

      <Container class1="compare-products-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
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
                <div className="box-compare">
                  <div className="compare-info d-flex justify-content-between align-items-center py-3 ">
                    <b className="compare-content">Brand:</b>
                    <span className="compare-title text-muted">Havills</span>
                  </div>
                  <div className="compare-info d-flex justify-content-between align-items-center py-3 ">
                    <b className="compare-content ">Type:</b>
                    <span className="compare-title text-muted">Watches</span>
                  </div>
                  <div className="compare-info d-flex justify-content-between align-items-center py-3 ">
                    <b className="compare-content">SKU</b>
                    <span className="compare-title text-muted">SKU004</span>
                  </div>
                  <div className="compare-info d-flex justify-content-between align-items-center py-3 ">
                    <b className="compare-content">Availability:</b>
                    <span className="compare-title text-muted">in Stock</span>
                  </div>
                  <div className="compare-info d-flex justify-content-between align-items-center py-3 ">
                    <b className="compare-content">Color</b>
                    <span className="compare-title colors d-flex ">
                      <span className="black"></span>
                      <span className="red"></span>
                      <span className="white"></span>
                    </span>
                  </div>
                  <div className="compare-info d-flex justify-content-between align-items-center py-3 ">
                    <b className="compare-content">Size</b>
                    <span className="compare-title text-muted d-flex gap-10">
                      <span>S</span>
                      <span>M</span>
                      <span>L</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="compare-product-card position-relative">
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
                <div className="box-compare">
                  <div className="compare-info d-flex justify-content-between align-items-center py-3 ">
                    <b className="compare-content">Brand:</b>
                    <span className="compare-title text-muted">Havills</span>
                  </div>
                  <div className="compare-info d-flex justify-content-between align-items-center py-3 ">
                    <b className="compare-content ">Type:</b>
                    <span className="compare-title text-muted">Watches</span>
                  </div>
                  <div className="compare-info d-flex justify-content-between align-items-center py-3 ">
                    <b className="compare-content">SKU</b>
                    <span className="compare-title text-muted">SKU004</span>
                  </div>
                  <div className="compare-info d-flex justify-content-between align-items-center py-3 ">
                    <b className="compare-content">Availability:</b>
                    <span className="compare-title text-muted">in Stock</span>
                  </div>
                  <div className="compare-info d-flex justify-content-between align-items-center py-3 ">
                    <b className="compare-content">Color</b>
                    <span className="compare-title colors d-flex ">
                      <span className="black"></span>
                      <span className="red"></span>
                      <span className="white"></span>
                    </span>
                  </div>
                  <div className="compare-info d-flex justify-content-between align-items-center py-3 ">
                    <b className="compare-content">Size</b>
                    <span className="compare-title text-muted d-flex gap-10">
                      <span>S</span>
                      <span>M</span>
                      <span>L</span>
                    </span>
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

export default CompareProducts;
