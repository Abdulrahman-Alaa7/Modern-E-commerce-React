import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import ShopCategories from "../components/ShopCategories";
import NumberPages from "../components/NumberPages";
import grid1 from "../images/gr.svg";
import grid2 from "../images/gr2.svg";
import grid3 from "../images/gr3.svg";
import grid4 from "../images/gr3.svg";
import smartWatch from "../images/smart-watch-02.jpg";
import watch from "../images/smart-watch.png";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState();

  return (
    <>
      <Meta title="our store" />
      <BreadCrumb title="our store" />
      <Container class1="store home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <ShopCategories />
            <div className="filter-card mb-3 filter-by">
              <h3 className="mb-3">Filter By </h3>
              <div className="info-available p-2">
                <h4>Availability</h4>
                <div className="form-check check-box">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="flexCheckChecked"
                  >
                    In stock (<span>21</span>)
                  </label>
                </div>
                <div className="form-check check-box">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="flexCheckDefault"
                  >
                    Out of stock (<span>1</span>)
                  </label>
                </div>
              </div>

              <div className="info-price p-2">
                <h4>Price</h4>
                <div className="d-flex justify-content-between gap-10">
                  <div className="inputs-price d-flex justify-content-between align-items-center">
                    <span className="text-muted me-1">$</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="From"
                    />
                  </div>
                  <div className="inputs-price d-flex justify-content-between align-items-center">
                    <span className="text-muted me-1">$</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="To"
                    />
                  </div>
                </div>
              </div>

              <div className="info-color p-2">
                <h4>Color</h4>
                <div className="colors-box d-flex flex-wrap">
                  <span className="color red"></span>
                  <span className="color black"></span>
                  <span className="color white"></span>
                  <span className="color blue"></span>
                  <span className="color pink"></span>
                  <span className="color orange"></span>
                  <span className="color green"></span>
                  <span className="color brown"></span>
                  <span className="color gray"></span>
                  <span className="color yellow"></span>
                </div>
              </div>

              <div className="info-size p-2">
                <h4>Size</h4>
                <div className="form-check check-box">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="size-s"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="size-s"
                  >
                    S (<span>9</span>)
                  </label>
                </div>
                <div className="form-check check-box">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="size-m"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="size-m"
                  >
                    M (<span>13</span>)
                  </label>
                </div>
                <div className="form-check check-box">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="size-l"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="size-l"
                  >
                    L (<span>10</span>)
                  </label>
                </div>
                <div className="form-check check-box">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="size-xl"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="size-xl"
                  >
                    XL (<span>7</span>)
                  </label>
                </div>
                <div className="form-check check-box">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="size-xxl"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="size-xxl"
                  >
                    XXL (<span>7</span>)
                  </label>
                </div>
              </div>
            </div>

            <div className="filter-card mb-3 product-tag">
              <h3 className="mb-3">Product Tag</h3>
              <div className="tags-box d-flex gap-10 flex-wrap p-1">
                <Link>
                  <span className="tags text-muted">Headphones</span>
                </Link>
                <Link>
                  <span className="tags text-muted">Laptops</span>
                </Link>
                <Link>
                  <span className="tags text-muted">Vivo</span>
                </Link>
                <Link>
                  <span className="tags text-muted">Oppo</span>
                </Link>
                <Link>
                  <span className="tags text-muted">Speaker</span>
                </Link>
                <Link>
                  <span className="tags text-muted">Tablet</span>
                </Link>
                <Link>
                  <span className="tags text-muted">Mobile</span>
                </Link>
                <Link>
                  <span className="tags text-muted">Wire</span>
                </Link>
              </div>
            </div>

            <div className="filter-card mb-3 random-products">
              <h3 className="pb-2">Random Products</h3>
              <Link
                to="/store/:id"
                className="info-random  d-flex justify-content-between align-items-center gap-10 p-1"
              >
                <div className="image-random">
                  <img src={smartWatch} alt="watch" className="img-fluid" />
                </div>
                <div className="content-random">
                  <h5 className="mb-0">
                    Smart Watch With Advanced Health Monitoring, Fitness...
                  </h5>
                  <ReactStars
                    count={5}
                    size={18}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    value={4.5}
                    edit={false}
                  />
                  <span className="price d-block">$100.00</span>
                </div>
              </Link>
              <Link
                to="/store/:id"
                className="info-random d-flex justify-content-between align-items-center gap-10 p-1"
              >
                <div className="image-random">
                  <img src={watch} alt="watch" className="img-fluid" />
                </div>
                <div className="content-random">
                  <h5 className="mb-0">
                    Smart Watch With Advanced Health Monitoring, Fitness...
                  </h5>
                  <ReactStars
                    count={5}
                    size={18}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    value={4.5}
                    edit={false}
                  />
                  <span className="price d-block">$100.00</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-9">
            <div className="sort-by filter-card d-flex justify-content-between align-items-center  mb-3">
              <div className="sort-by-content d-flex gap-10  align-items-center">
                <h6 className="mb-0">Sort By:</h6>
                <div className="dropdown drop-d ">
                  <button
                    className="btn dropdown-toggle text-muted d-flex align-items-center justify-content-between gap-30"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Best selling
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item" to="#">
                        Best selling
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Alphabetically, A-Z
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Alphabetically, Z-A
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Price, low to high
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Price, high to low
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Old
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        New
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="sort-by-grid d-flex  align-items-center gap-10">
                <div className="number-product text-muted">
                  <span>21</span> products
                </div>
                <div className="grid-icon d-flex gap-10">
                  <img
                    onClick={() => {
                      setGrid(3);
                    }}
                    src={grid4}
                    alt="grid"
                    className={`${grid === 3 ? "active" : ""}`}
                  />
                  <img
                    onClick={() => {
                      setGrid(4);
                    }}
                    src={grid3}
                    alt="grid"
                    className={`${grid === 4 ? "active" : ""}`}
                  />
                  <img
                    onClick={() => {
                      setGrid(6);
                    }}
                    src={grid2}
                    alt="grid"
                    className={`${grid === 6 ? "active" : ""}`}
                  />
                  <img
                    onClick={() => {
                      setGrid(12);
                    }}
                    src={grid1}
                    alt="grid"
                    className={`${grid === 12 ? "active" : ""}`}
                  />
                </div>
              </div>
            </div>

            <div className="products d-flex flex-wrap gap-10 justify-content-center mb-3">
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
            </div>

            <NumberPages />
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
