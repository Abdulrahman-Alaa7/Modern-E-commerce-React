import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import smartwatch from "../images/smart-watch-02.jpg";
import watch from "../images/watch.png";
import wish from "../images/wish.svg";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import addcard from "../images/add-cart.svg";
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  const navigate = useNavigate();
  const toLink = (event) => {
    event.preventDefault();

    navigate("/store/:id");
  };
  return (
    <>
      <div
        className={`${
          location.pathname === "/store"
            ? `grid-${grid}`
            : "col-lg-3 col-md-3 col-sm-6 py-2"
        } ${location.pathname === "/store/:id" ? "grid-3" : ""} ${
          "grid-undefined" ? "gr-3" : ""
        }`}
      >
        <button
          onClick={toLink}
          className="box position-relative border-0 text-start"
        >
          <span className="top-span ">-16%</span>
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="heart" className="heart" />
            </Link>
          </div>
          <div className="image-product d-flex justify-content-center align-items-center">
            <img src={smartwatch} alt="watch" className="img-fluid p-3" />
            <img src={watch} alt="watch" className="img-fluid p-3" />
          </div>
          <div className="info">
            <span className="brand">Havells </span>
            <h4 className="mb-0 text-dark">
              Smart Watch With Advanced Health Monitoring, Fitness...
            </h4>
            <ReactStars
              count={5}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
              value={4.5}
              edit={false}
            />
            <p
              className={`desc text-muted ${
                grid === 12 ? "d-block" : "d-none"
              }`}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              ex iste dicta, sequi facilis exercitationem maiores minima quod
              numquam veritatis assumenda veniam quibusdam perferendis
              asperiores. Dolore corrupti quisquam temporibus incidunt...
            </p>
            <div className="discount d-block price mt-0">
              <span className="price me-2 red">$250.00</span>
              <span className="price off">$300.00</span>
            </div>
          </div>
          <div className="action-bar  position-absolute">
            <div className="d-flex flex-column">
              <Link>
                <img src={prodcompare} alt="compare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link to="store/:id">
                <img src={addcard} alt="add-cart" />
              </Link>
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default ProductCard;
