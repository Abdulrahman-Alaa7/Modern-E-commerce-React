import React from "react";
import { Link, NavLink } from "react-router-dom";

const ShopCategories = () => {
  return (
    <>
      <div className="filter-card mb-3 shop-categories">
        <h3 className="mb-3">Shop By Categories</h3>
        <ul>
          <li>
            <Link to="/" className="text-muted p-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/store" className="text-muted p-2">
              Our Store
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="text-muted p-2">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-muted p-2">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShopCategories;
