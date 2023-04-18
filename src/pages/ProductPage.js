import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { BiZoomIn } from "react-icons/bi";
import ReactStars from "react-rating-stars-component";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { SiMaterialdesignicons } from "react-icons/si";
import { BsHeart, BsLink45Deg } from "react-icons/bs";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import wish from "../images/wish.svg";
import compare from "../images/prodcompare.svg";
import mastercard from "../images/mastercard.svg";
import paypal from "../images/paypal.svg";
import applepay from "../images/apple-pay.svg";
import visa from "../images/visa.svg";
import smartWatch from "../images/smart-watch-02.jpg";
import watch from "../images/smart-watch.png";
import Container from "../components/Container";

const ProductPage = () => {
  const location = useLocation();
  const linkProduct = location.pathname;
  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const props1 = {
    width: 529,
    height: 529,
    img: `${smartWatch}`,
    zoomPosition: "original",
  };
  const props2 = {
    width: 254,
    height: 254,
    img: `${watch}`,
    zoomPosition: "original",
  };

  const [orderdProduct, setOrderdProduct] = useState(true);

  const reportAlert = () => {
    window.confirm(
      "Are you sure you want report this review as inappropriate?"
    );
  };
  return (
    <>
      <Meta title="Smart Watch With Advanced Health Monitoring, Fitness." />
      <BreadCrumb title="Smart Watch With Advanced Health Monitoring, Fitness." />
      <Container class1="product-page home-wrapper-2 py-5">
        <div className="row">
          <div className=" row product-content  mb-5">
            <div className="col-6 images-box d-flex flex-wrap justify-content-start gap-10">
              <div className="img position-relative">
                <BiZoomIn className="zoom position-absolute text-muted" />
                <ReactImageZoom {...props1} />
              </div>
              <div className="images d-flex justify-content-start flex-wrap gap-10">
                <div className="img position-relative">
                  <BiZoomIn className="zoom position-absolute text-muted" />
                  <ReactImageZoom {...props2} />
                </div>
                <div className="img position-relative">
                  <BiZoomIn className="zoom position-absolute text-muted" />
                  <ReactImageZoom {...props2} />
                </div>
                <div className="img position-relative">
                  <BiZoomIn className="zoom position-absolute text-muted" />
                  <ReactImageZoom {...props2} />
                </div>
                <div className="img position-relative">
                  <BiZoomIn className="zoom position-absolute text-muted" />
                  <ReactImageZoom {...props2} />
                </div>
              </div>
            </div>
            <div className="col-6 info-box">
              <h3 className="mb-3">
                Smart Watch With Advanced Health Monitoring, Fitness.
              </h3>
              <div className="price-review py-2 mb-3">
                <b className="price d-block">$100.00</b>
                <div className="rate d-flex gap-10 my-1 align-items-center">
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
                  <div className="text-muted fs-12">
                    (<span>2</span> reviews)
                  </div>
                </div>
                <a href="#review" className="text-muted fs-14">
                  Write a review
                </a>
              </div>
              <div className="content mb-3 d-flex gap-10 align-items-center">
                <b className="fs-16">Type :</b>
                <span className="text-muted fs-14">Watches</span>
              </div>
              <div className="content  mb-3 d-flex gap-10 align-items-center">
                <b className="fs-16">Brand :</b>
                <span className="text-muted fs-14">Havells</span>
              </div>
              <div className="content mb-3 ">
                <b className="fs-16 d-block">Categories :</b>
                <div className="links-cate">
                  <Link className="text-muted">smart watches</Link>,{" "}
                  <Link className="text-muted">airpods</Link>,{" "}
                  <Link className="text-muted">cameras</Link>,{" "}
                  <Link className="text-muted">computers & laptop</Link>,{" "}
                  <Link className="text-muted">headphones</Link>,{" "}
                  <Link className="text-muted">mini speaker</Link>,{" "}
                  <Link className="text-muted">protable speakers</Link>,{" "}
                  <Link className="text-muted">smart phones</Link>,{" "}
                  <Link className="text-muted">smart television</Link>,{" "}
                </div>
              </div>
              <div className="content mb-3  d-flex gap-10 align-items-center">
                <b className="fs-16">Tags :</b>
                <div className="links-cate d-flex gap-10">
                  <Link className="text-muted">headphones</Link>
                  <Link className="text-muted">laptop</Link>
                  <Link className="text-muted">speaker</Link>
                  <Link className="text-muted">Oppo</Link>
                  <Link className="text-muted">mobile</Link>
                </div>
              </div>
              <div className="content mb-3 d-flex gap-10 align-items-center">
                <b className="fs-16">SKU :</b>
                <span className="text-muted fs-14">SKU027</span>
              </div>
              <div className="content mb-3 d-flex gap-10 align-items-center">
                <b className="fs-16">Availability :</b>
                <span className="text-muted fs-14">541 In stock</span>
              </div>
              <div className="content mb-3 ">
                <b className="fs-16 d-block mb-2">Size </b>
                <div className="size d-flex gap-15 text-muted">
                  <span className="active">S</span>
                  <span className="">L</span>
                </div>
              </div>
              <div className="content mb-3 ">
                <b className="fs-16 d-block my-3">Color </b>
                <div className="color d-flex gap-10">
                  <span className="active pink"></span>
                  <span className="black"></span>
                </div>
              </div>
              <div className="content mb-3 d-flex gap-10 align-items-center">
                <b className="fs-16">Quantity :</b>
                <input
                  type="number"
                  className="num text-dark"
                  placeholder="1"
                />
                <Link className="button-small add text-uppercase">
                  Add to cart
                </Link>
                <Link className="button-small add buy ">Buy It Now</Link>
              </div>
              <div className="content d-flex align-items-center gap-30 mb-4">
                <Link className="add-list d-flex align-items-center ">
                  <img src={wish} alt="wish" />
                  <span className="text-dark ms-1">Add to wishlist</span>
                </Link>
                <Link className="add-list d-flex align-items-center ">
                  <img src={compare} alt="compare" />
                  <span className="text-dark ms-1">Add to compare</span>
                </Link>
              </div>
              <div className="content d-flex align-items-center gap-30 mb-4">
                <div className="accordion w-100 drop" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button drop-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <MdOutlineLocalShipping className="text-muted icon me-2" />
                        Shipping & Returns
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsum architecto incidunt, quis, magnam eveniet
                          animi laudantium numquam nulla quibusdam nisi ut
                          natus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item ">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button drop-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <SiMaterialdesignicons className="text-muted icon me-2" />
                        Material
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsum architecto incidunt, quis, magnam eveniet
                          animi laudantium numquam nulla quibusdam nisi ut
                          natus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button drop-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <RxDimensions className="text-muted icon me-2" />
                        Dimensions
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsum architecto incidunt, quis, magnam eveniet
                          animi laudantium numquam nulla quibusdam nisi ut
                          natus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button drop-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <BsHeart className="text-muted icon me-2" />
                        Care Instructions
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsum architecto incidunt, quis, magnam eveniet
                          animi laudantium numquam nulla quibusdam nisi ut
                          natus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(`http://localhost:3000${linkProduct}`)
                    }
                    className=" accordion-item accordion-button share drop-button collapsed "
                  >
                    <BsLink45Deg className="text-muted icon me-2" />
                    Copy Link
                  </button>
                </div>
              </div>
              <div className="content-pay home-wrapper-2 p-3">
                <h6 className="text-center">Payment methods</h6>
                <div className="pay d-flex justify-content-center align-items-center gap-15">
                  <Link>
                    <img src={visa} alt="pay-method " />
                  </Link>
                  <Link>
                    <img src={paypal} alt="pay-method " />
                  </Link>
                  <Link>
                    <img src={mastercard} alt="pay-method " />
                  </Link>
                  <Link>
                    <img src={applepay} alt="pay-method " />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="desc mb-5">
            <h4>Description</h4>
            <div className="desc-box ">
              <p className="mb-0 text-muted fs-14 lh-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus atque tempore iste, delectus corporis facere neque
                in recusandae explicabo ipsa magni optio eveniet. Temporibus at
                fuga quam, rerum repellendus nihil laudantium optio. Neque
                facere provident dignissimos quidem culpa soluta voluptatum quis
                perferendis quo blanditiis recusandae dolorum velit officia
                aperiam, praesentium fuga hic tempora pariatur deleniti commodi!
                Aperiam temporibus iusto repellendus esse, consequatur beatae
                illo hic deserunt recusandae alias itaque sed doloribus est
                incidunt. Illo voluptatum unde cupiditate nemo iste veniam. A
                labore quisquam, porro vitae facilis reiciendis impedit nisi
                aperiam.
              </p>
            </div>
          </div>
          <div id="review" className="review mb-5">
            <h4>Reviews</h4>
            <div className="review-box ">
              <div className="title-review">
                <h6 className="mb-2">Customer Reviews</h6>
              </div>
              <div className="rate-box">
                <div className="stars d-flex gap-10 align-items-center  ">
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
                  <div className="text-muted fs-12">
                    Based on <span>2</span> reviews
                  </div>
                </div>
                {orderdProduct && (
                  <div className="report-write-review">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            <u className="text-muted">Write a review</u>
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body text-muted">
                            <h6 className="py-2 text-muted fs-18 mb-3">
                              Write A Review
                            </h6>
                            <form action="">
                              <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  placeholder="Enter your name"
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  placeholder="Your Email"
                                />
                              </div>
                              <div className=" rating mb-3">
                                <span className="d-block fs-16">Rating</span>
                                <ReactStars
                                  count={5}
                                  size={18}
                                  isHalf={true}
                                  emptyIcon={<i className="far fa-star"></i>}
                                  halfIcon={
                                    <i className="fa fa-star-half-alt"></i>
                                  }
                                  fullIcon={<i className="fa fa-star"></i>}
                                  activeColor="#ffd700"
                                  edit={true}
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="review-title"
                                  className="form-label"
                                >
                                  Review Title
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="review-title"
                                  placeholder="Give your review a title "
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleFormControlTextarea1"
                                  className="form-label"
                                >
                                  Body of review
                                </label>
                                <textarea
                                  className="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows="3"
                                  placeholder="Write your comments here"
                                ></textarea>
                              </div>
                              <div className="btn-review d-flex justify-content-end mb-3">
                                <button
                                  type="submit"
                                  className="button-small review border-0 fs-14"
                                >
                                  Submit Review
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="rate-box py-3">
                <div className="stars  ">
                  <ReactStars
                    count={5}
                    size={18}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    value={4}
                    edit={false}
                  />
                  <div className="text-muted fs-12 comment mb-2">
                    <p className="fs-16 text-dark d-block mb-1">Good</p>{" "}
                    <span className="name fs-16 text-dark">
                      <b>aaaaa</b>
                    </span>
                    <span className="fs-14 text-muted mx-1">
                      on <b className="text-dark fs-16">.</b>
                    </span>
                    <span className="date fs-14 ">
                      <span className=" ">10</span>
                      <span className="mx-1 ">Jun,</span>
                      <span className=" ">2023</span>
                    </span>
                  </div>
                  <p className="d-block fs-16 text-muted mb-0">Saafasf</p>
                </div>
                <div className="report text-end">
                  <span className="text-muted fs-14" onClick={reportAlert}>
                    <u>report as inappropriate</u>
                  </span>
                </div>
              </div>
              <div className="rate-box  py-3">
                <div className="stars  ">
                  <ReactStars
                    count={5}
                    size={18}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    value={5}
                    edit={false}
                  />
                  <div className="text-muted fs-12 comment mb-2">
                    <p className="fs-16 text-dark d-block mb-1">
                      Nice Quality, I'll Buy It Again
                    </p>{" "}
                    <span className="name fs-16 text-dark">
                      <b>admin</b>
                    </span>
                    <span className="fs-14 text-muted mx-1">
                      on <b className="text-dark fs-16">.</b>
                    </span>
                    <span className="date fs-14 ">
                      <span className=" ">20</span>
                      <span className="mx-1 ">Jun,</span>
                      <span className=" ">2023</span>
                    </span>
                  </div>
                  <p className="d-block fs-16 text-muted mb-0">
                    Great stuff, I think i will get more orders from you guys{" "}
                  </p>
                </div>
                <div className="reply-box ms-5 home-wrapper-2 p-3 mt-3 mb-2">
                  <span className="name-admin">
                    <b className="d-block mb-1">- Dev Era.</b>
                    <p className="mb-0 lh-lg text-muted fs-14">
                      Thank you for your purchase from. Please let us know if we
                      can do anything else for you!
                    </p>
                  </span>
                </div>
                <div className="report text-end">
                  <span className="text-muted fs-14" onClick={reportAlert}>
                    <u>report as inappropriate</u>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="may-like mb-3">
            <h4 className="mb-3">You May Also Like </h4>
            <div className=" products d-flex gap-10 flex-wrap justify-content-center">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductPage;
