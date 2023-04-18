import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const ShippingPolicy = () => {
  return (
    <>
      <Meta title="Shipping Policy" />
      <BreadCrumb title="Shipping Policy" />
      <Container class1="policy home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="policy-box">
              <div className="policy-content mb-3">
                <h5 className="fs-18 mb-2">The Standard Loerm ipsum dolor</h5>
                <p className="text-muted fs-14 mb-0 lh-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid beatae distinctio obcaecati quis quaerat quia neque
                  aut sit soluta totam, commodi exercitationem, ratione
                  reiciendis optio illum officia rem molestias dolorem? Sunt qui
                  distinctio fugit deleniti doloremque ea vel laboriosam ullam.
                </p>
              </div>
              <div className="policy-content mb-3">
                <h5 className="fs-18 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </h5>
                <p className="text-muted fs-14 mb-0 lh-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid beatae distinctio obcaecati quis quaerat quia neque
                  aut sit soluta totam, commodi exercitationem, ratione
                  reiciendis optio illum officia rem molestias dolorem? Sunt qui
                  distinctio fugit deleniti doloremque.
                </p>
              </div>
              <div className="policy-content mb-3">
                <h5 className="fs-18 mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt.
                </h5>
                <p className="text-muted fs-14 mb-0 lh-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid beatae distinctio obcaecati quis quaerat quia neque
                  aut sit soluta totam, commodi exercitationem, ratione
                  reiciendis optio illum officia rem.
                </p>
              </div>
              <div className="policy-content mb-3">
                <h5 className="fs-18 mb-2">The Standard Loerm ipsum dolor</h5>
                <p className="text-muted fs-14 mb-0 lh-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid beatae distinctio obcaecati quis quaerat quia neque
                  aut sit soluta totam, commodi exercitationem, ratione
                  reiciendis optio illum officia rem molestias dolorem? Sunt qui
                  distinctio fugit deleniti doloremque ea vel laboriosam ullam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;
