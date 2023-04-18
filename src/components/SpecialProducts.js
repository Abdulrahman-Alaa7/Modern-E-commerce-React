import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import wish from "../images/wish.svg";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import tab from "../images/tab.jpg";
import tab1 from "../images/tab1.jpg";
import tab2 from "../images/tab2.jpg";
const SpecialProducts = () => {
  return (
    <>
      <div className="col-lg-4 col-sm-6 col-sm-12 ">
        <div className="box-product mb-2 d-flex justify-content-between products gap-10 position-relative ">
          <div className="box-image position-relative d-flex flex-column align-items-center">
            <span className="top-span ">-20%</span>
            <div className="wishlist-icon position-absolute">
              <Link>
                <img src={wish} alt="heart" className="heart" />
              </Link>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column">
                <Link>
                  <img src={prodcompare} alt="compare" />
                </Link>
                <Link>
                  <img src={view} alt="view" />
                </Link>
              </div>
            </div>
            <div className="main-image">
              <img src={tab} alt="tab" className="img-fluid" />
            </div>
            <div className="image-2 d-flex justify-content-between gap-10">
              <img src={tab1} alt="tab" className="img-fluid" />
              <img src={tab2} alt="tab" className="img-fluid" />
            </div>
          </div>
          <div className="content-box info p-1 ">
            <span className="brand">Samsung </span>
            <h4 className="mb-1">Samsung Galaxy Tap A SM-T295, 4G... </h4>
            <ReactStars
              count={5}
              size={18}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
              value={3.5}
              edit={false}
            />
            <div className="discount d-block price my-1">
              <span className="price me-2 red">$450.00</span>
              <strike className="text-muted">$550.00</strike>
            </div>
            <div className="days mb-2 p-2">
              <span className="days-number">743</span>{" "}
              <span className="gray mx-1">Days</span>{" "}
              <span className="parent-span">
                <span>08</span> : <span>47</span> : <span>23</span>
              </span>
            </div>
            <div className="number-product mb-4">
              <span className="many d-block mb-1">
                Products: <span>5</span>
              </span>
              <div className="line position-relative">
                <span className="span-gray"></span>
                <span className="span-green" style={{ width: "5%" }}></span>
              </div>
            </div>
            <div className="option-button">
              <Link to="/" className=" button-small text-uppercase option">
                Option
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProducts;
