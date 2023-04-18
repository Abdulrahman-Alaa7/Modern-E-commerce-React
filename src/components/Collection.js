import React from "react";
import appleWatch from "../images/apple-watch.jpg";
import protableSpeaker from "../images/protable-speaker.jpg";
import laptop from "../images/laptop-1.jpg";
import iphone from "../images/iphone.jpg";

const Collection = () => {
  return (
    <>
      <div className="col-xl-3 col-lg-6 col-sm-12 py-2">
        <div className="box lap box-black">
          <div className="info">
            <span className="d-block text-uppercase">Big Screen</span>
            <h3>Smart Watch Series 7</h3>
            <p>From $399or $17.52/mo. for 24 mo.</p>
          </div>
          <div className="image">
            <img
              src={appleWatch}
              alt="apple-watch"
              className="img-fluid apple-watch"
            />
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-6 col-sm-12 py-2">
        <div className="box lap d-flex flex-column justify-content-between ">
          <div className="info">
            <span className="d-block text-uppercase">Studio Display</span>
            <h3>600 nits of brightness.</h3>
            <p>27-inch 5k Retina display</p>
          </div>
          <div className="image ">
            <img src={laptop} alt="laptop " className="img-fluid " />
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-6 col-sm-12 py-2">
        <div className="box lap d-flex flex-column justify-content-between position-relative">
          <div className="info">
            <span className="d-block text-uppercase">Smartphones</span>
            <h3>Smartphone 14 Pro.</h3>
            <p>From $999.00or $41.62/mo. for 24 mo. Footnote*</p>
          </div>
          <div className=" image mobile ">
            <img src={iphone} alt="iphone " />
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-6 col-sm-12 py-2">
        <div className="box lap d-flex flex-column justify-content-between ">
          <div className="info">
            <span className="d-block text-uppercase">Home speakers</span>
            <h3>Room-Filling sound.</h3>
            <p>From $699or $116.58/mo. for 12 mo.</p>
          </div>
          <div className="image ">
            <img
              src={protableSpeaker}
              alt="home-speaker "
              className="img-fluid "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
