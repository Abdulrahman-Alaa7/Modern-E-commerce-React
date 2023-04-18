import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProductCard from "../components/ProductCard";
import SpecialProducts from "../components/SpecialProducts";
import PopularProducts from "../components/PopularProducts";
import Collection from "../components/Collection";
import Meta from "../components/Meta";
import mainbanner from "../images/main-banner.jpg";
import mainbanner1 from "../images/main-banner-1.jpg";
import catbanner1 from "../images/catbanner-01.jpg";
import catbanner2 from "../images/catbanner-02.jpg";
import catbanner3 from "../images/catbanner-03.jpg";
import catbanner4 from "../images/catbanner-04.jpg";
import laptop from "../images/laptop.jpg";
import camera from "../images/camera.jpg";
import tv from "../images/tv.jpg";
import headphone from "../images/headphone.jpg";
import acc from "../images/acc.jpg";
import speaker from "../images/speaker.jpg";
import homeapp from "../images/homeapp.jpg";
import brand1 from "../images/brand-01.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";
import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import brand8 from "../images/brand-08.png";
import Container from "../components/Container";
import { Services } from "../utils/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
const Home = () => {
  return (
    <>
      <Meta title="Dev Era" />
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-xl-6 col-sm-12">
            <div className=" main-banner position-relative">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={mainbanner1}
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className=" main-banner-content position-absolute">
                    <h4 className="text-uppercase">Subercharged for pros.</h4>
                    <h5>Special Sale</h5>
                    <p>
                      From $999.00 or $41.62/mo.
                      <br />
                      For 24 mo. Footnote*
                    </p>
                    <Link className=" button text-uppercase">Buy Now</Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={mainbanner}
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className=" main-banner-content position-absolute">
                    <h4 className="text-uppercase">Subercharged for pros.</h4>
                    <h5>Special Sale</h5>
                    <p>
                      From $999.00 or $41.62/mo.
                      <br />
                      For 24 mo. Footnote*
                    </p>
                    <Link className=" button text-uppercase">Buy Now</Link>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="col-xl-6 col-sm-12 ">
            <div className="d-flex gap-10 justify-content-between align-items-center flex-wrap">
              <div className=" small-banner  position-relative ">
                <img
                  src={catbanner1}
                  alt="main-banner"
                  className="img-fluid rounded-3 "
                />
                <div className=" small-banner-content position-absolute">
                  <h4 className="text-uppercase">best sale</h4>
                  <h5>Laptops Max</h5>
                  <p>
                    From $1699.00 or
                    <br />
                    $64.62/mo.
                  </p>
                </div>
              </div>
              <div className=" small-banner  position-relative ">
                <img
                  src={catbanner3}
                  alt="main-banner"
                  className="img-fluid rounded-3"
                />
                <div className=" small-banner-content position-absolute">
                  <h4 className="text-uppercase">new arrival</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                    From $599 or
                    <br />
                    $49.91/mn. for 12 mo.
                  </p>
                </div>
              </div>
              <div className=" small-banner position-relative ">
                <img
                  src={catbanner2}
                  alt="main-banner"
                  className="img-fluid rounded-3"
                />
                <div className=" small-banner-content position-absolute">
                  <h4 className="text-uppercase">15% off</h4>
                  <h5>Smartwatch 7</h5>
                  <p>
                    Shop the latest band
                    <br />
                    styles and colors.
                  </p>
                </div>
              </div>
              <div className=" small-banner position-relative ">
                <img
                  src={catbanner4}
                  alt="main-banner"
                  className="img-fluid rounded-3"
                />
                <div className=" small-banner-content position-absolute">
                  <h4 className="text-uppercase">Free eneraving</h4>
                  <h5>AirPods Max</h5>
                  <p>
                    High fidelity playback &
                    <br />
                    ultra-low distortion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 services d-flex align-items-center justify-content-between flex-wrap flex-lg-row">
            {Services.map((i, j) => {
              return (
                <div
                  key={j}
                  className="box d-flex align-items-center gap-15 py-2"
                >
                  <img src={i.image} alt="service" />
                  <div className="content-box">
                    <h6>{i.title}</h6>
                    <p className="m-0">{i.tagline}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 categories card-wrapper d-flex flex-wrap justify-content-between align-items-center">
            <div className="box d-flex align-items-center">
              <div>
                <h6>Computers & Laptop</h6>
                <p className="m-0">8 Items</p>
              </div>
              <img src={laptop} alt="laptop" />
            </div>
            <div className="box d-flex  align-items-center">
              <div>
                <h6>Cameras & Videos</h6>
                <p className="m-0">10 Items</p>
              </div>
              <img src={camera} alt="camera" />
            </div>
            <div className="box d-flex  align-items-center">
              <div>
                <h6>Smart TV</h6>
                <p className="m-0">10 Items</p>
              </div>
              <img src={tv} alt="smart-tv" />
            </div>
            <div className="box d-flex  align-items-center">
              <div>
                <h6>Headphones</h6>
                <p className="m-0">10 Items</p>
              </div>
              <img src={headphone} alt="headphone" />
            </div>
            <div className="box d-flex  align-items-center">
              <div>
                <h6>Accessories</h6>
                <p className="m-0">10 Items</p>
              </div>
              <img src={acc} alt="accessories" />
            </div>
            <div className="box d-flex align-items-center">
              <div>
                <h6>Portable Speakers</h6>
                <p className="m-0">8 Items</p>
              </div>
              <img src={speaker} alt="speaker" />
            </div>
            <div className="box d-flex align-items-center">
              <div>
                <h6>Headphones</h6>
                <p className="m-0">10 Items</p>
              </div>
              <img src={headphone} alt="headphone" />
            </div>
            <div className="box d-flex align-items-center ">
              <div>
                <h6>Home Appliances</h6>
                <p className="m-0">6 Items</p>
              </div>
              <img src={homeapp} alt="homeapp" />
            </div>
          </div>
        </div>
      </Container>

      <Container class1="feature home-wrapper-2 py-5 products">
        <div className="row">
          <div className="col-12 icon-head d-flex align-items-center justify-content-between mb-2">
            <h3 className="section-heading">Featured Collection </h3>
            <div className="d-flex">
              <FiChevronLeft className="left" />
              <FiChevronRight className="right" />
            </div>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="collection home-wrapper-2 py-5 products">
        <div className="row">
          <Collection />
        </div>
      </Container>

      <Container class1="discount-products home-wrapper-2 pt-5 pb-4 ">
        <div className="row">
          <div className="col-12 icon-head d-flex align-items-center justify-content-between mb-2">
            <h3 className="section-heading">Special Products </h3>
            <div className="d-flex">
              <FiChevronLeft className="left" />
              <FiChevronRight className="right" />
            </div>
          </div>
          <SpecialProducts />
          <SpecialProducts />
          <SpecialProducts />
          <SpecialProducts />
          <SpecialProducts />
          <SpecialProducts />
        </div>
      </Container>

      <Container class1="products home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 icon-head d-flex align-items-center justify-content-between mb-2">
            <h3 className="section-heading">Our Popular Products </h3>
            <div className="d-flex">
              <FiChevronLeft className="left" />
              <FiChevronRight className="right" />
            </div>
          </div>
          <PopularProducts />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="arque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper card-wrapper">
              <Marquee className="d-flex align-items-center">
                <div className="mx-4 w-25">
                  <img src={brand1} alt="brad" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand2} alt="brad" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand3} alt="brad" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand4} alt="brad" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand5} alt="brad" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand6} alt="brad" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand7} alt="brad" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand8} alt="brad" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-12 icon-head d-flex align-items-center justify-content-between mb-2">
            <h3 className="section-heading">Our Latest News</h3>
            <div className="d-flex">
              <FiChevronLeft className="left" />
              <FiChevronRight className="right" />
            </div>
          </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Container>
    </>
  );
};

export default Home;
