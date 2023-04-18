import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/smart-watch.png";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Container from "../components/Container";
const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <table className="table ">
              <thead className="title-head">
                <tr>
                  <th
                    className=" title text-muted text-uppercase pb-4"
                    scope="col"
                  >
                    Product
                  </th>
                  <th
                    className=" title text-muted text-uppercase pb-4"
                    scope="col"
                  >
                    Price
                  </th>
                  <th
                    className=" title text-muted text-uppercase pb-4"
                    scope="col"
                  >
                    Quantity
                  </th>
                  <th
                    className=" title text-muted text-uppercase pb-4"
                    scope="col"
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-5">
                    <div className="info d-flex gap-30 align-items-center ">
                      <div className="image">
                        <img src={watch} alt="watch" className="img-fluid " />
                      </div>
                      <div className="content">
                        <h6 className="text-muted fs-16 mb-2">
                          Smart Watch With Advanced Health Monitoring, Fitness.
                        </h6>
                        <span className=" info-product parent text-muted d-block mb-2">
                          <span>Size: </span>
                          <span className="size">S </span>
                        </span>
                        <span className=" colors parent text-muted d-block mb-2">
                          <span>Color: </span>
                          <span className="color">#A85A5A </span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-5">
                    <b>$100.00</b>
                  </td>
                  <td className="py-5">
                    <div className="box-quan d-flex gap-10 align-items-center">
                      <div className="quantity">
                        <input
                          type="number"
                          placeholder="1"
                          className="quan-num"
                        />
                      </div>
                      <button className="remove border-0">
                        <RiDeleteBinLine className="icon" />
                      </button>
                    </div>
                  </td>
                  <td className="py-5">
                    <b>$100.00</b>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="py-5">
                    <div className="info d-flex gap-30 align-items-center ">
                      <div className="image">
                        <img src={watch} alt="watch" className="img-fluid " />
                      </div>
                      <div className="content">
                        <h6 className="text-muted fs-16 mb-2">
                          Smart Watch With Advanced Health Monitoring, Fitness.
                        </h6>
                        <span className=" info-product parent text-muted d-block mb-2">
                          <span>Size: </span>
                          <span className="size">S </span>
                        </span>
                        <span className=" colors parent text-muted d-block mb-2">
                          <span>Color: </span>
                          <span className="color">#A85A5A </span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-5">
                    <b>$100.00</b>
                  </td>
                  <td className="py-5">
                    <div className="box-quan d-flex gap-10 align-items-center">
                      <div className="quantity">
                        <input
                          type="number"
                          placeholder="1"
                          className="quan-num"
                        />
                      </div>
                      <button className="remove border-0">
                        <RiDeleteBinLine className="icon" />
                      </button>
                    </div>
                  </td>
                  <td className="py-5">
                    <b>$100.00</b>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="btn-shopping mb-3">
              <Link to="/store" className="button-small btn-shopping-content ">
                Continue Shopping
              </Link>
            </div>
          </div>
          <div className="col-12">
            <div className="info-cart d-flex justify-content-end align-items-center">
              {/* <div className="from-box order">
                  <form action="">
                    <div className="mb-3">
                      <label
                        htmlFor="Textarea1"
                        className="form-label fs-14 text-muted"
                      >
                        Order Special instructions
                      </label>
                      <textarea
                        className="form-control"
                        id="Textarea1"
                        rows="3"
                        placeholder="Order.."
                      ></textarea>
                    </div>
                  </form>
                </div> */}
              <div className="checkout">
                <div className="subtotal text-muted mb-3 d-flex gap-15">
                  <h5 className="sub mb-0">Subtotal</h5>
                  <span className="tot fs-18">
                    <b>$200.00</b>
                  </span>
                </div>
                <p className="mb-3 text-muted fs-14">
                  Taxes and shipping calculated at cheakout
                </p>
                <div className="check-btn ">
                  <Link
                    to="/information"
                    className="button-small w-100 fs-16 d-flex justify-content-center "
                  >
                    Check out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
