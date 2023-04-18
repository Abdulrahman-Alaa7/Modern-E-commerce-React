import React from "react";
import speaker from "../images/speaker.jpg";
import homeSpeaker from "../images/home-speaker.png";
import watch from "../images/smart-watch.png";
import laptop from "../images/laptop.jpg";
const PopularProducts = () => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 py-2">
        <div className="box box-one d-flex flex-column">
          <div className="prod d-flex gap-10 align-items-center my-2">
            <img src={watch} alt="smart-watch" />
            <h6 className="active">Smart Watch</h6>
          </div>
          <div className="prod d-flex gap-10 align-items-center my-2">
            <img src={speaker} alt="speaker" />
            <h6>Speaker</h6>
          </div>
          <div className="prod d-flex gap-10 align-items-center my-2">
            <img src={laptop} alt="laptop" />
            <h6>Laptops</h6>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12  py-2">
        <div className="box box-two ">
          <span className="text-uppercase">15% Off</span>
          <h4>Home Speakers</h4>
          <p className="text-white">
            From $299or $17.52/mo.
            <br />
            for 24 mo.
          </p>
          <div className="image">
            <img src={homeSpeaker} alt="home-speaker" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
